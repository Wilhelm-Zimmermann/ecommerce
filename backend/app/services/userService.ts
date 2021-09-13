import { db } from '../database/mongo'
import { compare, hash } from 'bcrypt'
import { verify, sign } from 'jsonwebtoken'
import { ObjectID } from 'mongodb'
import secret from '../../secret/hash.json'

interface IUser {
    username?: string
    email: string
    password: string
}

class UserService {

    async createUser({ username, email, password }: IUser) {

        const hashPass = await hash(password, 10)
        password = hashPass

        // Searcing if has an equal username
        const hasUser = await db.collection("users").findOne({
            username: username
        })

        // Searching if has an equal email
        const hasEmail = await db.collection("users").findOne({
            email: email
        })

        if (hasEmail) {
            throw new Error("Email already exist")
        }

        if (hasUser) {
            throw new Error("User already exist")
        }

        await db.collection("users").insertOne({
            username,
            email,
            password,
            money: 0,
            profilePhoto: '',
        }, (err, result) => {
            if (err) throw new Error("Error on insert User")
        })
        return username;
    }

    // Login
    async login({ email, password }: IUser) {

        const hasEmail = await db.collection("users").findOne({
            email
        })
        // Searching if email exists
        if (!hasEmail) {
            throw new Error("Password/Email might be invalid")
        }

        const passwordMatch = await compare(password, hasEmail.password)

        if (!passwordMatch) {
            throw new Error("Password/Email might be invalid")
        }

        const token = sign({
            email: hasEmail.email
        },
            secret.secret,
            {
                expiresIn: '2d',
                subject: String(hasEmail._id)
            }
        )

        return token

    }

    async getProfile(user_id:string) {

        const user = await db.collection('users').findOne({
            _id: new ObjectID(user_id)
        })

        if(!user){
            throw new Error("User not found")
        }

        return user;
    }

    async addMoney(money:number,user_id:string){

        await db.collection('users').updateOne(
            { _id : new ObjectID(user_id)},
            {$set:{money : Number(money)}}
        )
    }
}

export { UserService }
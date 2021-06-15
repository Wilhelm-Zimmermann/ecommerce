import { Request, Response } from 'express'
import { db } from '../database/mongo'
import bcrypt  from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { ObjectID } from 'mongodb'
import secret from  '../../secret/hash.json'
 
interface IUser{
    username : string
    email : string
    password : string
}

class UserController{
    // Creating a new user
    async createUser(req:Request, res:Response){
        const { username, email, password }: IUser = req.body
        const hash = await bcrypt.hash(password,10)

        // Searcing if has an equal username
        const hasUser = await db.collection("users").findOne({
            username : username
        })
        
        // Searching if has an equal email
        const hasEmail = await db.collection("users").findOne({
            email : email
        })

        if(hasEmail){
            return res.status(401).json({ error : 'This email is already in use'})
        }

        if(hasUser){
            return res.status(401).json({ error : 'This user already exists'})
        }

        await db.collection("users").insertOne({
            username,
            email,
            password : hash,
            money : 0,
            profilePhoto : '',
        },(err,result) => {
            if(err) return res.status(500).json({ err : "Error on insert user" })

            return res.status(201).json({
                username,
                email,
                password
            })
        })
    }

    // Login system
    async login(req:Request, res:Response){
        const { email, password } : IUser = req.body
        const user = await db.collection("users").findOne({
            email
        })

        // Searching if email exists
        if(!user){
            return res.status(400).json({ err : "There is a problem with login" })
        }

        await db.collection("users").findOne({
            email,
            password : bcrypt.compare(password,user.password,(err,result) => {
                if(err) return res.status(401).json({ err : "Access Denied" })

                if(!result) return res.status(401).send({error : 'Password might be invalid'})

                const token = jsonwebtoken.sign({
                    user_id : user._id,
                },
                    secret.secret,
                {
                    expiresIn : '2d'
                })
                return res.status(200).json({
                    token: token,
                    user_id : user._id
                })
            })
        })
    }

    async addMoney(req:Request, res:Response){
        // Adding money to user profile
        const { money } = req.body
        const token = req.headers.authorization.split(' ')[1]
        const decode = await jsonwebtoken.verify(token,secret.secret)
        const user_id = decode['user_id']

        await db.collection('users').updateOne(
            { _id : new ObjectID(user_id)},
            {$set:{money : Number(money)}}
        )
    }

    async getProfile(req:Request, res:Response){
        const token = req.headers.authorization.split(' ')[1]
        const decode = jsonwebtoken.verify(token,secret.secret)
        const user_id = decode['user_id']

        await db.collection('users').findOne({
            _id : new ObjectID(user_id)
        },(err,result) => {
            if(err) return res.status(500).json({ error : 'Cannot get User profile'})

            return res.status(200).json(result)
        })
    }
}

export { UserController }
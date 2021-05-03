import { Request, Response } from 'express'
import { db } from '../database/mongo'
import bcrypt  from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'



import secret from  '../../secret/hash.json'

interface IUser{
    username : string
    email : string
    password : string
}

class UserController{
    async createUser(req:Request, res:Response){
        const { username, email, password }: IUser = req.body
        const hash = await bcrypt.hash(password,10)

        await db.collection("users").insertOne({
            username,
            email,
            password : hash 
        },(err,result) => {
            if(err) return res.status(500).json({ err : "Error on insert user" })

            return res.status(201).json({
                username,
                email,
                password
            })
        })
    }

    async login(req:Request, res:Response){
        const { email, password } : IUser = req.body

        const user = await db.collection("users").findOne({
            email
        })

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
                    username : user.username
                },
                    secret.secret,
                {
                    expiresIn : '1d'
                })
                return res.status(200).json({
                    token,
                    user_id : user._id
                })
            })
        })
    }
}

export { UserController }
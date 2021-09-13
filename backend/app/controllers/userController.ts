import { Request, Response } from 'express'
import {UserService} from '../services/userService'
 
const userService:UserService = new UserService();

interface IUser{
    username : string
    email : string
    password : string
}

class UserController{
    // Creating a new user
    async createUser(req:Request, res:Response):Promise<Response>{
        const { username, email, password }: IUser = req.body
        try{
            const user = await userService.createUser({username,email,password})
            return res.status(201).json({msg : "user inserted", username: user})
        }catch(err){
            return res.status(400).json({err: err.message})
        }
    }

    //Login system
    async login(req:Request, res:Response):Promise<Response>{
        const {email, password} = req.body;
        try{
            const user = await userService.login({email, password})
            return res.status(200).json({token : user})
        }catch(err){
            return res.status(400).json({ err : err.message })
        }
    }

    async addMoney(req:Request, res:Response):Promise<Response>{
        const {money} = req.body
        const token = req.headers.authorization.split(' ')[1]
        try{
            await userService.addMoney(money,token)
            return res.status(200).json({msg: "Money added to your profile"})
        }catch(err){
            return res.status(400).json({ err : err.message})
        }
    }

    async getProfile(req:Request, res:Response):Promise<Response>{
        const token = req.headers.authorization.split(' ')[1]
        try{
            const user = await userService.getProfile(token)
            return res.status(200).json(user)
        }catch(err){
            return res.status(400).json({ err : err.message})
        }
    }
}

export { UserController }
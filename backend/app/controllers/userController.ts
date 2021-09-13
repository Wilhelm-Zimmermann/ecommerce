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
        const { user_id } = req
        try{
            await userService.addMoney(money,user_id)
            return res.status(200).json({msg: "Money added to your profile"})
        }catch(err){
            return res.status(400).json({ err : err.message})
        }
    }

    async getProfile(req:Request, res:Response):Promise<Response>{
        const { user_id } = req
        try{
            const user = await userService.getProfile(user_id)
            return res.status(200).json(user)
        }catch(err){
            return res.status(400).json({ err : err.message})
        }
    }
}

export { UserController }
import jsonwebtoken from 'jsonwebtoken'
import secret from '../secret/hash.json'
import {Request, Response, NextFunction} from 'express'

class Auth{
    async private(req:Request,res: Response,next: NextFunction){
        try{
            const token = req.headers.authorization.split(' ')[1]
            const decode = jsonwebtoken.verify(token,secret.secret)
            next()
        }catch(err){
            return res.status(401).json({ err : "Token Invalid" })
        }
    }
}

export { Auth }
import {verify} from 'jsonwebtoken'
import secret from '../secret/hash.json'
import {Request, Response, NextFunction} from 'express'

class Auth{
    // This function protect the private routes
    async private(req:Request,res: Response,next: NextFunction){
        try{
            const token = req.headers.authorization.split(' ')[1]
            const decode = verify(token,secret.secret)
            next()
        }catch(err){
            res.status(401).json({ error : 'Invalid Token'})
        }

    }
    // This function no need token
    async public(req:Request,res: Response,next: NextFunction){
        try{
            const token = req.headers.authorization.split(' ')[1]
            const decode = verify(token,secret.secret)
            next()
        }catch(err){
            next()
        }
    }
}

export { Auth }
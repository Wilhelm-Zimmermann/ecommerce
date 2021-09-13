import {verify} from 'jsonwebtoken'
import secret from '../../secret/hash.json'
import {Request, Response, NextFunction} from 'express'

interface IPayload{
    sub:string;
}

class Auth{
    // This function protect the private routes
    async private(req:Request,res: Response,next: NextFunction){
        const bearerToken = req.headers.authorization
        if(!bearerToken){
            return res.status(401).end()
        }
        const [,token] = bearerToken.split(' ')
        try{
            const {sub} = verify(token,secret.secret) as IPayload
            req.user_id = sub
            next()
        }catch(err){
            res.status(401).json({ error : 'Invalid Token'})
        }

    }
    // This function no need token
    async public(req:Request,res: Response,next: NextFunction){
        next()
    }
}

export { Auth }
import { db } from '../database/mongo'
import { Request,Response } from 'express'
import { ObjectID } from 'mongodb'
import secret from '../../secret/hash.json'
import jsonwebtoken from 'jsonwebtoken'

class TransationController{
    // This is the payment method
    async payment(req:Request,res:Response){
        const { order_id } = req.params
        const token = req.headers.authorization.split(' ')[1]
        const decode = jsonwebtoken.verify(token,secret.secret)
        // get the user id using the token
        const user_id = decode['user_id']

        // Search for the user on database
        const user = await db.collection('users').findOne({
            _id : new ObjectID(user_id)
        })
        // Searching the order based on id
        const order = await db.collection('orders').findOne({
            _id : new ObjectID(order_id)
        })

        if(order.totalPrice > user.money){
            // If order costs more than you have, you'll get a problem
            res.status(400).json({
                error : 'Not enough money'
            })
        }
        if(order.totalPrice <= user.money){
            const total =  Number(user.money) - Number(order.totalPrice) 
            await db.collection('users').updateOne(
                {_id : new ObjectID(user_id)},
                {$push:{
                    // We push all orders to user profile
                    orders : {
                        order
                    }
                    // we set the money
                },$set:{
                    money : total,
                }},(err,result) => {
                    if(err){
                        return res.status(500).json({ error : 'Error on buy product'})
                    }
                    res.status(200).json({ msg : 'Payment Successfull'})
                })
        }
    }
}

export default TransationController
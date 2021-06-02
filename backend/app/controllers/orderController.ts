import { Request, Response } from 'express'
import { db } from '../database/mongo'
import jsonwebtoken from 'jsonwebtoken'
import secret from '../../secret/hash.json'
import { ObjectID } from 'mongodb'

class OrderController{
    async getAllOrders(req: Request, res: Response){
        await db.collection("orders").find().toArray((err,result) => {
            if(err) return res.status(500).json({ err : "Error on Orders" })

            res.status(200).json({ result })
        })
    }

    async newOrder(req: Request, res: Response){
        const { product_id } = req.params
        const { quantityValue } = req.body

        const token = req.headers.authorization.split(' ')[1]
        const decode = await jsonwebtoken.verify(token,secret.secret)

        const product = await db.collection("products").findOne({
            _id : new ObjectID(product_id),
        })

        const totalPrice = Number(quantityValue) * Number(product.price)

        await db.collection("orders").insertOne({
            product,
            quantityValue,
            totalPrice,
            user_id : decode['user_id'],
        },(err,result) => {
            if(err) return res.status(500).json({ err : "Cannot make a new order"})

            res.status(201).json({ id : result.insertedId })
        })
    }

    async deleteOrder(req: Request, res: Response){
        const { id } = req.params

        await db.collection("orders").deleteOne({
            _id : new ObjectID(id)
        },(err,result) => {
            if(err) return res.status(500).json({ err : "Error on delete order"})

            return res.status(200).json({ msg : "Deleted Sucessfull"})
        })
    }

}

export { OrderController }
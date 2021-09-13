import { db } from '../database/mongo'
import { ObjectID } from 'mongodb'

class OrderService {    
    async getAllOrdersByUser(user_id : string){
        const orders = await db.collection("orders").find({user_id : user_id}).toArray()
        return orders
    }

    async newOrder(product_id:string,quantityValue:number,user_id:string){

        const product = await db.collection("products").findOne({
            _id : new ObjectID(product_id),
        })

        const totalPrice = Number(quantityValue) * Number(product.price)

        const orderInserted = await db.collection("orders").insertOne({
            product,
            quantityValue,
            totalPrice,
            status : 'pending',
            user_id,
        })

        return orderInserted.insertedId
    }

    async deleteOrder(id:string){

        await db.collection("orders").deleteOne({
            _id : new ObjectID(id)
        })

        return "OK"
    }
}

export {OrderService}
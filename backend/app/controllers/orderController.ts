import { Request, Response } from 'express'
import { OrderService } from "../services/orderService"
const orderService = new OrderService()

class OrderController{

    async getAllOrdersByUser(req:Request, res:Response){
        const { user_id } = req
        try{
            const orders = await orderService.getAllOrdersByUser(user_id)
            return res.status(200).json(orders)
        }catch(err){
            return res.status(400).json({ err : err.message })
        }
    }

    async newOrder(req:Request, res:Response){
        const { user_id } = req
        const { quantityValue } = req.body
        const { product_id } = req.params
        try{
            const order = await orderService.newOrder(user_id,quantityValue,product_id)
            return res.status(200).json(order)
        }catch(err){
            return res.status(400).json({ err : err.message })
        }
    }

    async deleteOrder(req:Request, res:Response){
        const { id } = req.params
        try{
            const orders = await orderService.deleteOrder(id)
            return res.status(200).json({ msg : "ok"})
        }catch(err){
            return res.status(400).json({ err : err.message })
        }
    }
}

export { OrderController }
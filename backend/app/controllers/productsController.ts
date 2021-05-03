import { db } from '../database/mongo'
import { Request,Response } from 'express'
import { ObjectID } from 'mongodb'

interface IProduct{
    name : string
    price : string
}

class ProductController{
    async findAllProducts(req: Request, res: Response){
        await db.collection("products").find().toArray((err,result) => {
            if(err) return res.status(400).json({err : "Cannot find any products"})

            res.status(200).json({
                msg : "ok",
                response :result
            })
        })
    }

    async addProduct(req: Request, res: Response){
        const { name,price }:IProduct = req.body 
        const img = req.file.path

        await db.collection("products").insertOne({
            name,
            price,
            img
        },(err,result) => {
            if(err) return res.status(500).json({err : "Cannot insert product now"})

            const response = {
                name,
                price,
                img,
                request:{
                    type : "POST",
                    url : "http://localhost:8080"
                }
            }
            res.status(201).json({
                msg : "ok",
                response
            })
        })
    }

    async updateProduct(req: Request, res: Response){
        const { name , price } : IProduct = req.body
        const { id } = req.params

        await db.collection("products").updateOne(
            {_id : new ObjectID(id)},
            {$set:{
                name,
                price
            }},(err,result) => {
                if(err) return res.status(500).json({ err : "Error on update product"})

                res.status(201).json({
                    msg : "ok",
                })
            })
    }

    async deleteProduct(req: Request, res: Response){
        const { id } = req.params
        console.log(id)
        
        await db.collection("products").deleteOne({
            _id: new ObjectID(id)
        },(err,result) => {
            if(err) return res.status(500).json({err : "Cannot delete this file"})

            res.status(200).json({ msg : "Deleted Sucessfull"})
        })
    }
}


export { ProductController }
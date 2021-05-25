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
            if(err) return res.status(500).json({err : "Cannot find any products"})
	    
	    // we put the status '200' because in the front end this can get an error	
	    if(result.length === 0) return res.status(200).json({ response : '4' })
            res.status(200).send({
                response :result
            })
        })
    }

    async addProduct(req: Request, res: Response){
        const { name,price }:IProduct = req.body 
        const img = req.file.filename

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

    async getOneProduct(req: Request, res: Response){
        const { id } = req.params

        db.collection('products').findOne({
            _id : new ObjectID(id)
        },(err,result) => {
            if(err) return res.status(500).json({ err : 'Error on get single product'})

            res.json(result)
        })
    }
    
    async searchProduct(req: Request, res: Response){
        const product_name = req.params.name        

        db.collection('products').createIndex({ name : 'text'})
        
        db.collection('products').find(
            {$text : {$search : product_name}},
            
        ).toArray((err,result) => {
            if(err) return res.status(500).json({ error : 'Error on search product'})

            res.status(200).json({
                amount : result.length,
                result : result
            })
        })
        
    }
}


export { ProductController }
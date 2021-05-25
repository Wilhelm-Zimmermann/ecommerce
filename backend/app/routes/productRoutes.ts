import { Router } from 'express'
import multer from 'multer'
import { ProductController } from '../controllers/productsController'
import {Auth} from '../../middleware/auth'

const auth = new Auth()

// Using multer,for upload images "files"

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'./uploads/')
    },
    filename : (req,file,cb) => {
        cb(null,new Date().getTime() +'_'+ file.originalname)
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null,true)
    }
    cb(null,false)
}

const upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024 * 1024 * 5,
    },
    fileFilter: fileFilter
})

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-

const productRoutes = Router()
const productController = new ProductController() 

// Get all products
productRoutes.get('/products',productController.findAllProducts)

// Insert a product
productRoutes.post('/products',
    upload.single("img_product"),
    auth.private,
    productController.addProduct
)

// Get one product

productRoutes.get('/products/:id',productController.getOneProduct)

// Delete product based on id
productRoutes.delete('/products/:id/delete',auth.private,productController.deleteProduct)

// Update product based on id
productRoutes.put('/products/:id/update',auth.private,productController.updateProduct)

// Search engine
productRoutes.get('/products/:name/name',productController.searchProduct)

export { productRoutes }
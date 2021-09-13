import { Router } from 'express'
const orderRoutes = Router()
import { OrderController } from '../controllers/orderController'
import {Auth} from '../middleware/auth'

const auth = new Auth()

const orderController = new OrderController()

orderRoutes.get('/order',auth.private,orderController.getAllOrdersByUser)

orderRoutes.post('/order/:product_id',auth.private,orderController.newOrder)

orderRoutes.delete('/order/:id/delete_order',auth.private,orderController.deleteOrder)

export { orderRoutes }
import { Router } from 'express'
import TransationController from '../controllers/transationController'
import { Auth } from '../middleware/auth'
const transationRoutes = Router()
const auth = new Auth()

const transationController = new TransationController()
transationRoutes.post('/:order_id',auth.public,transationController.payment)

export { transationRoutes }
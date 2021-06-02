import { Router } from 'express'
const transationRoutes = Router()
import TransationController from '../controllers/transationController'

const transationController = new TransationController()
transationRoutes.post('/:order_id',transationController.payment)

export { transationRoutes }
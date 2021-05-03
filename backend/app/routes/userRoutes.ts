import { Router } from 'express'
import { UserController } from '../controllers/userController'
const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/user/signup",userController.createUser)

userRoutes.post("/user/login",userController.login)

export { userRoutes }
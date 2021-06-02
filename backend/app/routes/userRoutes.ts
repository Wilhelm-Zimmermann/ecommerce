import { Router } from 'express'
import { UserController } from '../controllers/userController'
const userRoutes = Router()
const userController = new UserController()
import {Auth} from '../../middleware/auth'

const auth = new Auth()

userRoutes.post("/user/signup",userController.createUser)

userRoutes.post("/user/login",userController.login)

userRoutes.put("/user/money",auth.private,userController.addMoney)

export { userRoutes }
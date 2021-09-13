import { Router } from 'express'
import { UserController } from '../controllers/userController'
import { Auth } from '../middleware/auth'

const userRoutes = Router()
const userController = new UserController()

const auth = new Auth()

userRoutes.post("/user/signup",auth.public,userController.createUser)

userRoutes.post("/user/login",auth.public,userController.login)

userRoutes.put("/user/money",auth.private,userController.addMoney)

userRoutes.get("/user/profile",auth.private,userController.getProfile)

export { userRoutes }
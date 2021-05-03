import express from 'express'
import { productRoutes } from './routes/productRoutes'
import { orderRoutes } from './routes/orderRoutes'
import { userRoutes } from './routes/userRoutes'

const app = express()
const port = 8080


app.use(express.json())
app.use(express.urlencoded({ extended : true }))
// A rota uploads fica reponsavel pelos uploads das imagens
app.use("/uploads",express.static("uploads"))

app.use('/',productRoutes)
app.use('/',orderRoutes)
app.use('/',userRoutes)

app.listen(port ,() => {
    console.log("Server ON,PORT:"+port)
})
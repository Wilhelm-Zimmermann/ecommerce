import { http,app } from './server'
import { productRoutes } from './routes/productRoutes'
import { orderRoutes } from './routes/orderRoutes'
import { userRoutes } from './routes/userRoutes'
import { transationRoutes } from './routes/transationRoutes'

app.use('/',productRoutes)
app.use('/',orderRoutes)
app.use('/',userRoutes)
app.use('/transation',transationRoutes)

const port = 8081
http.listen(port ,() => {
    console.log("Server ON,PORT:"+port)
})
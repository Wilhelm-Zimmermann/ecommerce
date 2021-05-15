import { http,app } from './server'
import { productRoutes } from './routes/productRoutes'
import { orderRoutes } from './routes/orderRoutes'
import { userRoutes } from './routes/userRoutes'

app.use('/',productRoutes)
app.use('/',orderRoutes)
app.use('/',userRoutes)

const port = 8081
http.listen(port ,() => {
    console.log("Server ON,PORT:"+port)
})
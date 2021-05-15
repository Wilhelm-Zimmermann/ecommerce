import express from 'express'
import { createServer } from 'http'

import cors from 'cors'

const app = express()

const http = createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
// A rota uploads fica reponsavel pelos uploads das imagens
app.use("/uploads",express.static("uploads"))

export { http,app }
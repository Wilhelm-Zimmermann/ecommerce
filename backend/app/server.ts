import express from 'express'
import { createServer } from 'http'

import cors from 'cors'

const app = express()

const http = createServer(app)

app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000']
  }))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
// The route uploads has access to image
app.use("/uploads",express.static("uploads"))

export { http,app }
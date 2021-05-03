import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/ecommerce",{useNewUrlParser : true, useUnifiedTopology : true})
mongoose.Promise = global.Promise

const db = mongoose.connection

export { db }
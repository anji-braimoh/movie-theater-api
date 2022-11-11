const express = require('express')
const db = require ("../db/db")
const seed = require('../seed')
const showsRouter = require('../routes/shows')
const userRouter = require('../routes/users')
const app = express()
const port = 3000


app.use (express.json())
app.use("/users",userRouter)
app.use("/shows",showsRouter)



module.exports = showsRouter, userRouter,app
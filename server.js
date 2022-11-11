const express = require('express')
const seed = require('./seed')
const showsRouter = require('./routes/shows')
const userRouter = require('./routes/users')
const app = express()
const port = 3000

app.use("/users",userRouter)
app.use("/shows",showsRouter)


module.exports = showsRouter, userRouter,app
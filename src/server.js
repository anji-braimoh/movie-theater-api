const express = require('express')
const db = require ("../db/db")
const showsRouter = require('../routes/shows')
const userRouter = require('../routes/users')
const app = express()
const port = 3000
const seed = require("../seed")


app.use (express.json())
app.use("/users",userRouter)
app.use("/shows",showsRouter)

app.listen (port,async()=>{
    await db.sync()
})

module.exports = showsRouter, userRouter,app
const express = require('express')
const db = require ("../db/db")
const showsRouter = require('../routes/shows')
const userRouter = require('../routes/users')
const app = express()
const port = 3000
const seed = require("../seed")

function lengthAndError (req,res,next){

    if (Shows.body('status').isLength({min:5}) && body('status').isLength({max:25})){
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    }else res.status(200).send({ msg: 'Show status is updated!'})
}else next()
}

function checkEmpty (req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    }else res.status(200).send({ msg: 'Show rating is updated!'})
    next()
}



app.use(checkEmpty)
app.use (express.json())
app.use(lengthAndError)
app.use("/users",userRouter)
app.use("/shows",showsRouter)

app.listen (port,async()=>{
    await db.sync({force:true})
})

module.exports = showsRouter, userRouter,app
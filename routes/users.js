const express = require ('express')
const userRouter = express.Router()
const User = require ("../models/User")

userRouter.get("/",(req,res) => {
    res.send("Successful GET Request made!")
})

userRouter.get("/id",(req,res) => {
    res.send("Successful GET Request made!")
})

userRouter.get("/id/shows",(req,res) => {
    res.send("Successful GET Request made!")
})

userRouter.put("/id/shows",(req,res) => {
    res.send("Successful PUT Request made!")
})

module.exports = userRouter
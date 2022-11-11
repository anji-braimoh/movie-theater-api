const {Router} = require ('express')
const userRouter = Router()
const User = require ("../../models/User")

userRouter.get("/",async(req,res) => {
    res.send("Successful GET Request made!")
})

userRouter.get("/id",async (req,res) => {
    res.send("Successful GET Request made!")
})

userRouter.get("/id/shows",async (req,res) => {
    res.send("Successful GET Request made!")
})

userRouter.put("/id/shows",async (req,res) => {
    res.send("Successful PUT Request made!")
})

module.exports = userRouter
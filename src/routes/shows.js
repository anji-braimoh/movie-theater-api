const express = require ('express')
const showsRouter = express.Router()
const Shows = require ("../models/Show")

showsRouter.get("/",async (req,res) => {

})

showsRouter.get("/id",async (req,res) => {

})

showsRouter.get("/:genre",async (req,res) => {
    const theParam =shows[req.params.genre]
     res.send(shows[req.params.genre]) 
  })
  

showsRouter.put("/id/rating",async (req,res) => {
    res.send("Successful PUT Request made!")
})

showsRouter.put("/id/status",async (req,res) => {
    res.send("Successful PUT Request made!")
})

showsRouter.delete("/id",async (req,res)=>{
    res.send("Successful DELETE Request made!")
})

module.exports = showsRouter

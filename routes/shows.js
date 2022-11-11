const express = require ('express')
const showsRouter = express.Router()
const Shows = require ("../models/Show")

showsRouter.get("/",(req,res) => {

})

showsRouter.get("/id",(req,res) => {

})

showsRouter.get("/:genre",(req,res) => {
    const theParam =shows[req.params.genre]
     res.send(shows[req.params.genre]) 
  })
  

showsRouter.put("/id/rating",(req,res) => {
    res.send("Successful PUT Request made!")
})

showsRouter.put("/id/status",(req,res) => {
    res.send("Successful PUT Request made!")
})

showsRouter.delete("/id",(req,res)=>{
    res.send("Successful DELETE Request made!")
})

module.exports = showsRouter

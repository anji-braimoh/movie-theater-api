const {Router} = require ('express')
const showsRouter = Router()
const Shows = require ("../models/Show")
const middleware = require("../middleware/middleware")

showsRouter.get("/",async (req,res) => {
    const shows = await Shows.findAll()
    res.status(200).send(shows)
})

showsRouter.get("/:id",async (req,res) => {
    const show = await Shows.findByPk(req.params.id)
    if (show === true){
        res.status(200).send(show)
    }else{ res.sendStatus(404)
    }

})

showsRouter.get("/:genre",async (req,res) => {
    const show =await Shows.findAll({where:{genre:req.params.genre}})
     res.send(shows[req.params.genre]) 
  })
  

showsRouter.put("/:id/:rating",async (req,res) => {
    const show = await Shows.findByPk(req.params.id)
    if (show===true){
        await Show.update(
            {rating: req.params.rating},
            {where: {id:req.params.id}}
            )
        res.status(200).send('rating is updated')
    } else {
        res.status(404).send('error')
    }
})

showsRouter.put("/:id/:status",async (req,res) => {
    const show = await Shows.findByPk(req.params.id)
    if (show===true){
        await Shows.update(
            {status: req.params.status},
            {where: {id:req.params.id}}
            )
        res.status(200).send('status is updated')
    } else {
        res.status(404).send('error')
    }
})

showsRouter.delete("/:id",async (req,res)=>{
    const show = await Show.findByPk(req.params.id)
    show.destroy()
    res.status(200).send("show has been deleted")
})

module.exports = showsRouter

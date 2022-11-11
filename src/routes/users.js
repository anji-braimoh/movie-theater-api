const {Router} = require ('express')
const userRouter = Router()
const User = require ("../../models/User")
const Shows = require ("../models/Show")

userRouter.get("/",async(req,res) => {
    const users = await User.findAll()
    res.status(200).send(shows)
})

userRouter.get("/:id",async (req,res) => {
    const user = await Users.findByPk(req.params.id)
    if (user === true){
        res.status(200).send(show)
    }else{ res.sendStatus(404)
    }
})

userRouter.get("/:id/:shows",async (req,res) => {
    const user = await User.findByPk(req.params.id)
    if (user === true){
        const show = await user.getShows()
    res.status(200).send(show)
    }else { res.status(404).send("error")
    }
})

userRouter.put("/:id/:shows",async (req,res) => {
   const user = await User.findByPk(req.params.id)
   const show = await Shows.findByPk(req.params.id)

   if (user && show === true){
   await user.addShow(show)
   res.status(200).send("Success")
}
else {res.status(404).send("error")}

})

module.exports = userRouter
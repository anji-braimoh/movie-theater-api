const express = require('express')
const {body,validationResult} = require("express-validator")
const app = express()
const Shows = require ("../models/Show")

app.use(express.json())

function lengthAndError (req,res,next){

    if (Shows.body('status').isLength({min:5}) && body('status').isLength({max:25})){
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    }else res.status(200).send({ msg: 'Show status is updated!'})
}else next()
}

app.post('/shows', (req, res) => {
    // check if there are any errors
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    }else res.status(200).send({ msg: 'Show rating is updated!'})
})
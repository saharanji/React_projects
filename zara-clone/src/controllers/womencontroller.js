const express=require("express")
// const res = require("express/lib/response")


const router=express.Router()

//namechange

const Women=require("../models/women.model")


router.get("/",async (req,res)=>{

    const womendata= await Women.find({}).lean().exec()
    return res.status(200).send(womendata)


})

router.get("/:id",async (req,res)=>{

    const womendata= await Women.find({id:req.params.id}).lean().exec()
    return res.status(200).send(womendata)


})
module.exports=router
const express = require("express")

const menHairCutrouter = express.Router()
 const { MenHaircutModel } = require("../../models/mens.model/menhaircut.model")





//  all data of mens spa and hair treatment
menHairCutrouter.get("/",async (req,res)=>{
    try{
        const data = await MenHaircutModel.find()
        res.status(200).send(data)
    }
    catch(err){
        res.status(401).send({"Error" : err})
    }
  

})



// data for paticular category
menHairCutrouter.get("/search",async (req,res)=>{
    const { name } = req.query
    try{
        const data = await MenHaircutModel.find({'name' : name})
        res.status(200).send(data)
    }
    catch(err){
        res.status(401).send({"Error" : err})
    }
  

})




//  route to create new mens spa and treatment data
menHairCutrouter.post("/create", async(req,res)=>{
  const payload = req.body

  try{

    const data = new MenHaircutModel(payload)
    await data.save()
    res.status(200).send("Data added sucessfully")
  }catch(err){
    res.status(401).send({"Error" : err})
  }
})



// update any mens spa and tretment data
menHairCutrouter.post("/update/:ID" ,async(req,res)=>{
    const ID = req.params.ID
    const payload = req.body

    try{
        const app = await MenHaircutModel.findOne({_id:ID})
        if(app){
            await MenHaircutModel.findByIdAndUpdate({_id : ID},payload)
            res.status(200).send("Updation Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
})


// delete
menHairCutrouter.post("/delete/:ID" ,async(req,res)=>{
    const ID = req.params.ID
    

    try{
        const app = await MenHaircutModel.findOne({_id:ID})
        if(app){
            await MenHaircutModel.findByIdAndDelete({_id : ID})
            res.status(200).send("Deletion Sucessfull")
        }else{
            res.status(404).send("Not found")
        }
    }
    catch(err){
        res.status(400).send({"Error" : err})
    }
})

module.exports = { menHairCutrouter }
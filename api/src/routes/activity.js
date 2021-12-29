const { Router } = require('express');
const { Country, Activity,Country_Activity } = require("../db");
const { route } = require('./country');


const router = Router();

router.get("/",async (req,res)=>{
    const findActivity= await Activity.findAll({include:{model:Country}})
    res.send(findActivity)
})

router.post("/",async (req,res)=>{
    try {
        const {name,difficulty,duration,season,countriesid}=req.body;

        const newActivity=  await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })
       
        await newActivity.addCountry(countriesid) //countries es el id del pais
        
        res.send(countriesid)

    } catch (error) {
        
        console.log(error)
    }
    
})



module.exports = router;
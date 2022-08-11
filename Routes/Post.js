const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_POST.js');

router.post('/create', async(req,res)=>{
    try{
      
      console.log(req.body);
    //  const {title,startDate,endDate,address,description} = req.body;
     // const result = await query.addCamp(name,firstName,lastName,password,type)
     
      //res.end();
    
    }
    catch(err){
      console.log(err)
    }  
})

module.exports = router
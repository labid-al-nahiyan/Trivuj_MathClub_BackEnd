const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_MEMBER');

router.post('/create', async(req,res)=>{
    try{
      
      console.log(req.body);

      const {name,firstName,lastName,password} = req.body;
      const type = "student"

      const result = await query.create(name,firstName,lastName,password,type)
     
      res.send(result);
    
    }
    catch(err){
      console.log(err)
    }  
  })

module.exports = router
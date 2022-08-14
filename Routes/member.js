const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_MEMBER');

router.post('/create', async(req,res)=>{
    try{
      
      console.log(req.body);

      const {name,firstName,lastName,password,DOB,email,phone,Institution,city,classNo} = req.body;

      const result = await query.create(name,firstName,lastName,password,DOB,email,phone,Institution,city,classNo)
     
      res.end();
    
    }
    catch(err){
      console.log(err)
    }  
  })

  router.post('/verify', async(req,res)=>{
    try{
      
      console.log(req.body);

      const {name,password} = req.body;

      const result = await query.verify(name,password)
     
      console.log(typeof(result));
      res.json(result)

    }
    catch(err){
      console.log(err)
    }  
  })

module.exports = router
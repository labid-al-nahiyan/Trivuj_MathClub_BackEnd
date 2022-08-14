const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_TRAINER');

router.post('/add', async(req,res)=>{
    try{
      console.log(req.body);
      const {Name,DOB,Institution,expert,email} = req.body;
      const result = await query.add(Name,DOB,Institution,expert,email)
     
      res.end();
    
    }
    catch(err){
      console.log(err)
    }  
  })

  router.get('/getTrainer', async(req,res)=>{
    try{
      
      const result = await query.getTrainer()
      console.log(result)
      res.json(result);
    
    }
    catch(err){
      console.log(err)
    }  
  })

module.exports = router
const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_PROBLEMSET');

router.post('/addProblem', async(req,res)=>{
    try{
      
      console.log(req.body);

      // const result = await query.create(name,firstName,lastName,password,type)
     
      //res.send(req.body);
    
    }
    catch(err){
      console.log(err)
    }  
  })

    
  

module.exports = router
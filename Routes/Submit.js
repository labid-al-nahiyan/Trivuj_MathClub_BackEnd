const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_SUBMIT');

router.post('/', async(req,res)=>{
    try{
      
      console.log(req.body);

      const {PROBLEMID,MEMBERID,submittedAns, verdict} = req.body;

       await query.submit(PROBLEMID,MEMBERID,submittedAns, verdict)
     
      res.send(req.body);
    
    }
    catch(err){
      console.log(err)
    }  
  })

    
  

module.exports = router
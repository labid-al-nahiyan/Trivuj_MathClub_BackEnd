const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_SUBMISSION.js');


router.get('/', async(req,res)=>{
    try{
      
      
      const result = await query.submission()

      console.log(result)
      res.json(result);
    
    }
    catch(err){
      console.log(err)
    }  
})

module.exports = router
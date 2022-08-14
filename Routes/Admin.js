const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_ADMIN')

const trainer = require('./Trainer');
router.use('/trainer',trainer);


router.post('/verify', async(req,res)=>{
  try{
    
    console.log(req.body);
    const {name,password} = req.body;

    const result = await query.verify(name,password)
   
    res.json(result)
  

  }
  catch(err){
    console.log(err)
  }  
})


module.exports = router;

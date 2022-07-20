const express = require('express');
const handle = require('./handle');

const router = express.Router({mergeParams:true})

router.get('/', async(req,res)=>{
    try{
      const result =await handle.run();
      
      console.log(result)
      
      res.send(result);
    }
    catch{
      console.log("hel")
    }  
  })

module.exports = router
const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_POST.js');

router.post('/create', async(req,res)=>{
    try{
      
      console.log(req.body);
      const {title,description, organizerID} = req.body;
      const result = await query.add(title,description,organizerID)
     
      res.send(result);
    
    }
    catch(err){
      console.log(err)
    }  
})
router.get('/getPost', async(req,res)=>{
  try{
    
    const result = await query.getPost()
   
    console.log(result)
    res.json(result);
  
  }
  catch(err){
    console.log(err)
  }  
})
router.post('/getMyPost', async(req,res)=>{
  try{
    const {poster_id} = req.body;
    const result = await query.getMyPost(poster_id)
   
    console.log(result)
    res.json(result);
  
  }
  catch(err){
    console.log(err)
  }  
})

module.exports = router
const express = require('express');
 
const router = express.Router({mergeParams:true})

const query = require('../Query/DB_COMMENT.js');


router.post('/get', async(req,res)=>{
    try{
      
      console.log(req.body);
      const {postId} = req.body;
      console.log(postId)
      const result = await query.get(postId)
      console.log(result)
      res.json(result);
    
    }
    catch(err){
      console.log(err)
    }  
})
router.post('/add', async(req,res)=>{
  try{
    console.log(req.body);
    const {addComment, userId, postId} = req.body;
    
    const result = await query.add(addComment, userId, postId)
   
    console.log(result)

    res.json(req.body);
  
  }
  catch(err){
    console.log(err)
  }  
})


module.exports = router
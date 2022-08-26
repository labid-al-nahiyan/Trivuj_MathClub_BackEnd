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
  router.get('/getProblem', async(req,res)=>{
    try{
      
      const result = await query.getProblem()
      res.json(result);
    
    }
    catch(err){
      console.log(err)
    }  
  })
  router.post('/getProblem/filter', async(req,res)=>{
    try{
      const {tag} = req.body;
      const result = await query.getProblemFilter(tag)
      console.log(result)
      res.json(result);
    }
    catch(err){
      console.log(err)
    }  
  })
  router.get('/getStatement/:id', async(req,res)=>{
    try{
      const id =await req.params.id;
      console.log(id);
       const result = await query.getStatement(id);
       console.log(result)
      // res.json(result);
      res.json(result);
    
    }
    catch(err){
      console.log(err)
    }  
  })

    
  

module.exports = router
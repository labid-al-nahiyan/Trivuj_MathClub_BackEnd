const express = require('express')
const app = express()
const port = 3010
const cors=require('cors')
app.use(express.json());
app.use(cors())

const func = require('./func');
const handle = require('./handle');
const about = require('./about')

app.use('/about',about);

app.listen(port,async()=>{
  try{
    await func.startup();
    console.log("listen on port 3010")
  }
  catch(err){
    console.log(err);
  }
})




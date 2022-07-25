const port = 3010

const app = require('./app');
const connection = require('./Connection');

app.listen(port,async()=>{
  try{
    await connection.startup();
    console.log("listen on port 3010")
  }
  catch(err){
    console.log(err);
  }
})





const func = require('./Connection');


const handle = {}

handle.run = async ()=>{
    const sql =`SELECT * FROM Member`
    
    const binds = {}

    const reslt=  (await func.execute(sql,binds,func.options)).rows
    
    return reslt;
}

module.exports = handle;
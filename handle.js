
const func = require('./func');


const handle = {}

handle.run = async ()=>{
    const sql =`SELECT * FROM EMPLOYEES`
    
    const binds = {}

    const reslt=  (await func.execute(sql,binds,func.options)).rows
    
    return reslt;
}

module.exports = handle;
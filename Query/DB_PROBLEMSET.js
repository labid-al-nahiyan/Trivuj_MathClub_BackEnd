
const connct = require('../Connection');


const handle = {}

handle.getProblem = async (Name,DOB,Institution,expert,email)=>{
    const sql = `
        SELECT *
        FROM T2L2_PROJECT.PROBLEMSET 
    `
    
    const binds = {}

    const result=  (await connct.execute(sql,binds,connct.options)).rows;
    return result;
}
handle.getStatement = async (id)=>{
    const sql = `
        SELECT *
        FROM T2L2_PROJECT.PROBLEMSET 
        WHERE id=:id
    `
    
    const binds = {id:id}

    const result=  (await connct.execute(sql,binds,connct.options)).rows;
    return result;
}
handle.verity = async (userName, password )=>{
    const sql = `
        Select * 
        From T2L2_PROJECT.MEMBERS
        WHERE Username =:userName AND Password =:password
    `
    
    const binds = {
        userName :userName,
        password :password
    }

    const result=  (await connct.execute(sql,binds,connct.options)).rows
    console.log(result);
    return result;
}

module.exports = handle;
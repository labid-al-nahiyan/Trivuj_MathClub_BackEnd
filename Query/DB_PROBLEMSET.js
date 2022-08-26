
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
handle.getProblemFilter = async (tag)=>{
    const sql = `
        SELECT *
        FROM T2L2_PROJECT.PROBLEMSET 
        WHERE TAG=:tag
    `
    
    const binds = {tag:tag}

    const result=  (await connct.execute(sql,binds,connct.options)).rows;
    return result;
}


module.exports = handle;
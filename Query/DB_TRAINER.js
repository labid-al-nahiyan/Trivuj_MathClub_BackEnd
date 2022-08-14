
const connct = require('../Connection');


const handle = {}

handle.add = async (Name,DOB,Institution,expert,email)=>{
    const sql = `
        INSERT INTO T2L2_PROJECT.TRAINERS (NAME,EMAIL,EXPERTIZE,DOB,INSTITUTION)
        VALUES (:Name,:email,:expert,TO_DATE(:DOB,'YYYY-MM-DD'),:Institution)
    `
    
    const binds = {Name,DOB,Institution,expert,email}

    const result=  (await connct.execute(sql,binds,connct.options))
    return result;
}
handle.getTrainer = async ()=>{
    const sql = `
        Select * 
        From T2L2_PROJECT.TRAINERS
    `
    
    const binds = {
    }

    const result=  (await connct.execute(sql,binds,connct.options)).rows
    console.log(result);
    return result;
}

module.exports = handle;
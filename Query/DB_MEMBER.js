
const connct = require('../Connection');


const handle = {}

handle.create = async (userName, firstName, lastName, password,type )=>{
    const sql = `
        INSERT INTO T2L2_PROJECT.MEMBER (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME,MEMBER_TYPE)
        VALUES (:userName,:password,:firstName,:lastName,:type)
    `
    
    const binds = {userName, firstName, lastName, password,type}

    const result=  (await connct.execute(sql,binds,connct.options))
    
    return result;
}

module.exports = handle;
const connct = require('../Connection');

const handle = {}

handle.addCamp = async (userName, firstName, lastName, password,type )=>{
    const sql = `
        INSERT INTO T2L2_PROJECT.MEMBER (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME,MEMBER_TYPE)
        VALUES (:userName,:password,:firstName,:lastName,:type)
    `
    
    const binds = {userName, firstName, lastName, password,type}

    const result=  (await connct.execute(sql,binds,connct.options))
    return result;
}
handle.verify = async (userName, password )=>{
    const sql = `
        Select * 
        From T2L2_PROJECT.MEMBER
        WHERE USERNAME =:userName AND PASSWORD =:password
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
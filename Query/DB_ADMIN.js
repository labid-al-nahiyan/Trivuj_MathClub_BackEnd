const connct = require('../Connection');


const handle = {}

handle.verify = async (userName, password )=>{
    const sql = `
        Select * 
        From T2L2_PROJECT.ADMINS
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
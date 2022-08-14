
const connct = require('../Connection');


const handle = {}

handle.create = async (userName,firstName,lastName,password,DOB,email,phone,Institution,city,classNo )=>{
    const fullName = firstName + ' '+lastName;
    const sql = `
        INSERT INTO T2L2_PROJECT.MEMBERS (NAME,USERNAME,PASSWORD,EMAIL,PHONE,CLASS,CITY,DOB,INSTITUTION)
        VALUES (:fullName,:userName,:password,:email,:phone,:classNo,:city,TO_DATE(:DOB,'YYYY-MM-DD'),:Institution)
    `
    
    const binds = {fullName,userName,password,email,phone,classNo,city,DOB,Institution}

    const result=  (await connct.execute(sql,binds,connct.options))
    return result;
}
handle.verify = async (userName, password )=>{
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
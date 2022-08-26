
const connct = require('../Connection');


const handle = {}

handle.submission = async ( )=>{
    const sql = `
        SELECT s.ID as sID, m.NAME, p.TITLE, s.VERDICT, s.TIME, p.ID as pID
        FROM MEMBERS m JOIN SUBMITS s ON m.ID = s.MEMBERID JOIN PROBLEMSET p ON s.PROBLEMID = p.ID 
        ORDER BY TIME DESC
    `
    
    const binds = {}

    const result=  (await connct.execute(sql,binds,connct.options)).rows
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
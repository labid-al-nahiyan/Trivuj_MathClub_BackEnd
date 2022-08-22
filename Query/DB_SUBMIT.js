const connct = require('../Connection');

const handle = {}

handle.submit = async (PROBLEMID,MEMBERID,submittedAns, verdict )=>{
    const sql = `
        INSERT INTO T2L2_PROJECT.SUBMITS (MEMBERID,PROBLEMID,VERDICT,SUBMITTEDANS)
        VALUES (:MEMBERID,:PROBLEMID,:verdict,:submittedAns)
    `
    
    const binds = {PROBLEMID:PROBLEMID,MEMBERID:MEMBERID,submittedAns:submittedAns,verdict:verdict}

     await connct.execute(sql,binds,connct.options)
    
}


module.exports = handle;
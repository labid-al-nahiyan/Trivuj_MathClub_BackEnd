
const connct = require('../Connection');


const handle = {}

handle.add = async (title,description,POSTER_ID )=>{
    console.log(POSTER_ID , typeof(POSTER_ID));
    const sql = `
        INSERT INTO T2L2_PROJECT.POST (POSTER_ID,TITLE, DESCRIPTION)
        VALUES (:posterId,:title,:description)
    `
    
    const binds = {title:title,description:description,posterId:POSTER_ID}

    const result=  (await connct.execute(sql,binds,connct.options))
    return result;
}
handle.getPost = async ()=>{
    
    const sql = 
        `
        Select M.NAME,P.poster_id,P.title,P.description,to_char(P.POST_DATE, 'HH12:MMam,DDmonYYYY') AS postDate
        From POST P Join MEMBERS M ON P.poster_id = M.ID
        `
    const binds = {
       
    }

    const result=  (await connct.execute(sql,binds,connct.options)).rows
    console.log(result);
    return result;
}
handle.getMyPost = async ({poster_id})=>{
    
    const sql = 
        `
        Select M.NAME,P.poster_id,P.title,P.description,to_char(P.POST_DATE, 'HH12:MMam,DDmonYYYY') AS postDate
        From POST P Join MEMBERS M ON P.poster_id = M.ID
        WHERE P.poster_id=:poster_id
        `
    const binds = {
        poster_id:poster_id
    }

    const result=  (await connct.execute(sql,binds,connct.options)).rows
    console.log(result);
    return result;
}

module.exports = handle;
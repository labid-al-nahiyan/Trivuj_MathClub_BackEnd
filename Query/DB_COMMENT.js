
const connct = require('../Connection');


const handle = {}

handle.add = async (addComment, userId, postId )=>{
    const sql = `
        INSERT INTO T2L2_PROJECT.COMMENTS (COMMENTS,POST_ID, USER_ID)
        VALUES (:comments,:postId,:userId)
    `
    
    const binds = {comments:addComment,postId:postId,userId:userId}

    const result=  (await connct.execute(sql,binds,connct.options))
    return result;
}
handle.get = async (ID)=>{
    console.log(ID)
    const sql = 
        `
        Select C.ID, M.NAME,C.USER_ID,C.POST_ID,C.COMMENTS,to_char(C.POST_DATE, 'HH12:MMam,DDmonYYYY') AS postDate
        From  MEMBERS M JOIN COMMENTS C
        ON C.POST_ID =:ID AND M.ID = C.USER_ID
        ORDER BY postDate ASC
        `
    const binds = {
       ID:ID
    }

    const result=  (await connct.execute(sql,binds,connct.options)).rows
    console.log(result);
    return result;
}
handle.getMyPost = async (poster_id)=>{
    console.log('hello');
    console.log(poster_id);
    
    const sql = 
        `
        Select P.ID, M.NAME,P.poster_id,P.title,P.description,to_char(P.POST_DATE, 'HH12:MMam,DDmonYYYY') AS postDate
        From POST P Join MEMBERS M ON P.poster_id = M.ID
        WHERE P.POSTER_ID=:poster_id
        ORDER BY postDate ASC
        `
    const binds = {
        poster_id:poster_id
    }

    const result=  (await connct.execute(sql,binds,connct.options)).rows
    console.log(result);
    return result;
}

module.exports = handle;
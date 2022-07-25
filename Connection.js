const oracledb = require('oracledb');
oracledb.autoCommit = true;


const func = {}

func.options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT
}
func.startup = async()=>{
    console.log('starting up database.');
    await oracledb.createPool({
        user: "T2L2_Project",
        password: "orcl",
        connectstring: "localhost/ORCL",
        poolMin: 4,
        poolMax: 10,
        poolIncrement: 1
    });
    console.log('pool created');
}

func.execute = async (sql, binds, options)=>{
    let connection, results;
    try {
        // Get a connection from the default pool
        connection = await oracledb.getConnection();
        results = await connection.execute(sql, binds, options);

    } catch (err) {
        console.log("ERROR executing sql: " + err.message);
    } finally {
        if (connection) {
            try {
                // Put the connection back in the pool
                await connection.close();
            } catch (err) {
                console.log("ERROR closing connection: " + err);
            }
        }
    }
    return results;
}

module.exports= func
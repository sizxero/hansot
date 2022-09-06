const oracledb = require('oracledb');
require('dotenv').config();

const dbConfig ={
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
    externalAuth: false
}


const DAO = {
    findAllCategories: async() => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select count(*) from categories`, binds, options);
        let result =  sql.rows[0]['COUNT(*)'];
        await conn.close();
        return result;
    },
}

module.exports = DAO;
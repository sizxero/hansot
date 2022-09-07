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
        
        let sql = await conn.execute(`select c.*, s.* from subcategories s, categories c where s.s_category_no = c.c_no`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },
    
    findMainCategories: async() => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from categories`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },
}

module.exports = DAO;
const oracledb = require('oracledb');
require('dotenv').config();

const dbConfig ={
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
    externalAuth: false
}


const DAO = {
    findAllSido: async() => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from regions`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },
    
    findGuGun: async(sido_no) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from subregions where sr_region_no=${sido_no}`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },

    findAllStore: async() => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from stores`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    }
}

module.exports = DAO;
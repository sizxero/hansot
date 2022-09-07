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

    findCtgMenu: async(ctgNo) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from menu where mn_subcategory_no=${ctgNo}`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },

    findAllMenu: async() => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from menu`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },

    findOneMenu: async(mnNo) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select * from menu where mn_no=${mnNo}`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },

    findOptions: async(mnNo) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select mn_no, options.*
        from menu, options, menu_option
        where mn_no=mo_menu_no
        and op_no=mo_option_no
        and mn_no=${mnNo}`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    },

    findAllergy: async(mnNo) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select mn_no, allergy.*, am_grade
        from menu, allergy, allergy_menu
        where a_no=am_allergy_no
        and mn_no=am_menu_no
        and mn_no=${mnNo}`, binds, options);
        let result =  sql.rows;
        await conn.close();
        return result;
    }
}

module.exports = DAO;
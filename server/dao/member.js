const oracledb = require('oracledb');
require('dotenv').config();

const dbConfig ={
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
    externalAuth: false
}

oracledb.initOracleClient({
    libDir: process.env.ORACLE_LIB_DIR
});

const DAO = {
    isExistId: async(id) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select count(*) from members where mb_id='${id}'`, binds, options);
        let result =  sql.rows[0]['COUNT(*)'];
        await conn.close();
        return result !== 0;
    },
    signUp: async(data) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT,
            autoCommit: true
        };
        await conn.execute(`insert into members values(mb_seq.nextval, '${data.id}', '${data.pwre}', '${data.name}', '${data.email}', '${data.phone}')`, binds, options);
        await conn.close();
    },
    login: async(data) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        
        let sql = await conn.execute(`select count(*) from members where mb_id='${data.id}' and mb_pw='${data.pw}'`, binds, options);
        let result =  sql.rows[0]['COUNT(*)'];
        await conn.close();
        return result === 1;
    }
}

module.exports = DAO;

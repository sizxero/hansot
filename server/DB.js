const oracledb = require('oracledb');
const dbConfig = require('./dbConfig.js');
require('dotenv').config();

oracledb.initOracleClient({
    libDir: process.env.ORACLE_LIB_DIR
});

async function selectDatabase() {
    let conn = await oracledb.getConnection(dbConfig);
    let binds = {};
    let options =  {
        outFormat: oracledb.OUT_FORMAT_OBJECT
    };
    
    let results = await conn.execute('select * from subregions', binds, options);
    for (var i=0; i<results.rows.length; i++) {
        console.log(results.rows[i]);
    }
    await conn.close();
}

selectDatabase();
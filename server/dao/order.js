const oracledb = require('oracledb');
require('dotenv').config();

const dbConfig ={
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
    externalAuth: false
}


const DAO = {
    order: async(data) => {
        let conn = await oracledb.getConnection(dbConfig);
        let binds = {};
        let options =  {
            outFormat: oracledb.OUT_FORMAT_OBJECT,
            autoCommit: true
        };
        await conn.execute(`insert into orders(OR_NO, OR_MEMBER_NO, OR_MENU_NO) values(or_seq.nextval, (select mb_no from members where mb_id='${data.member}'), '${data.menu.info.MN_NO}')`, binds, options);
        data.options.forEach(op => {
            conn.execute(`insert into order_option values(oo_seq.nextval, or_seq.currval, ${Number(op.split('-')[1])})`, binds, options);
        })
        
        await conn.close();
    },
}

module.exports = DAO;
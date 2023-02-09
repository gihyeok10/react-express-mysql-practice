var mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "react_test",
    //포트 다르면 지정, port:3307

    
});

module.exports= db;
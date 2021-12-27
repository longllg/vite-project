var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port:'22',
    user: 'longlinguo',
    password: '!BHbhbhbh520',
    database: 'my_test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
        console.log(error);
    };
    console.log(results);
});
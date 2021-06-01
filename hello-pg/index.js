var { Client } = require('pg');

var client = new Client({
    user: "gitpod",
    host: "localhost",
    database: "hello",
    port: 5432
});

client.connect();

var query = {
    text: "SELECT $1 || $2",
    values: [ 'Hello,', 'world!' ]
}

client.query(query)
    .then((res) => {
        console.log(res.rows[0]);
    })
    .catch((err) => {
        console.log(err.stack);
    });

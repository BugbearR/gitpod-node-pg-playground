const { Client } = require('pg');

const client = new Client({
    user: "gitpod",
    host: "localhost",
    database: "template1",
    port: 5432
});

client.connect();

const query = {
    text: "SELECT $1 || $2 as hello",
    values: [ "Hello,", "world!" ]
};

// client.query(query)
//     .then((res) => {
//         console.log(res.rows[0]);
//         client.end();
//     })
//     .catch((err) => {
//         console.log(err.stack);
//         client.end();
//     });
(async () => {
    try {
        const res = await client.query(query);
        console.log(res.rows[0]);
    }
    catch (e) {
        console.log(e.stack);
    }
    finally {
        client.end();
    }
})();

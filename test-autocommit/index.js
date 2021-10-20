const { Client } = require('pg');

const client = new Client({
    user: "gitpod",
    host: "localhost",
    database: "hello",
    port: 5432
});

client.connect();

(async () => {
    try {
        let res = await client.query("SELECT txid_current() AS txid");
        console.log(res.rows[0]);
        res = await client.query("SELECT txid_current() AS txid");
        console.log(res.rows[0]);
        console.log("BEGIN");
        await client.query("BEGIN");
        res = await client.query("SELECT txid_current() AS txid");
        console.log(res.rows[0]);
        res = await client.query("SELECT txid_current() AS txid");
        console.log(res.rows[0]);
        console.log("COMMIT");
        await client.query("COMMIT");
        res = await client.query("SELECT txid_current() AS txid");
        console.log(res.rows[0]);
        res = await client.query("SELECT txid_current() AS txid");
        console.log(res.rows[0]);
    }
    catch (e) {
        console.log(e.stack);
    }
    finally {
        client.end();
    }
})();

const { Client } = require('pg');

const client = new Client({
    user: "gitpod",
    host: "localhost",
    database: "template1",
    port: 5432
});

client.connect();

function testEscapeLiteral(obj) {
    console.log("escapeLiteral");
    console.log(obj);
    console.log(client.escapeLiteral(obj));
}

(async () => {
    try {
        [ undefined, null, "a", 'a"b', "a\\b", "a'b", 1, ["a"], ["a", "b"], {k:"v"}, new Date(2001, 11, 31, 12, 34, 56) ].forEach( (obj) => {
            try {
                testEscapeLiteral(obj);
            } catch ( exc ) {
                console.log( exc.message );
            }
        } );
    }
    catch (e) {
        console.log(e.stack);
    }
    finally {
        client.end();
    }
})();

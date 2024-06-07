import { connection } from "../connectToDB.js";

export async function getOrganization(res) {

    await connection.query("SELECT * FROM org",
        function(err, results, fields) {
            res.send(JSON.stringify(results))
        });
}


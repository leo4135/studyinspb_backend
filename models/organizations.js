import { connection } from "../connectToDB.js";

export async function getOrganization(res) {

    await connection.query("SELECT * FROM organizations",
        function(err, results, fields) {
            res.send(JSON.stringify(results))
        });
}


import { connection } from "../connectToDB.js";

export async function getEducation(res) {

    await connection.query("SELECT * FROM education_programs",
        function(err, results, fields) {
            res.send(JSON.stringify(results))
        });
}


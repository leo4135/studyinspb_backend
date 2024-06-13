import { connection } from "../connectToDB.js";

export async function getNews(res) {

    await connection.query("SELECT * FROM news",
        function(err, results, fields) {
            res.send(JSON.stringify(results))
        });
}


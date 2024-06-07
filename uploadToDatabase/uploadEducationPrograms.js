import mysql from 'mysql'
import {dataPrograms} from "../dataExportsExcelToJSON/dataPrograms.js";


const dataUpload = dataPrograms;
const maskDB = [];


export const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'Lol'
});



connection.query("SELECT * FROM education_programs",
    function(err, results, fields) {
        console.log(results); // собственно данные
    });




/*
connection.query("SELECT * FROM org",
    function(err, results, fields) {
        console.log(results); // собственно данные
    });
*/


/*
dataUpload2.forEach(itemOrigin => {
    dataUpload.forEach(item => {
        if (itemOrigin.fullTitle == item.fullTitle && item.id == 48) {
            const sql = `INSERT INTO org(fullTitle, shortTitle, description, supervisorFio, supervisorJobTitle, inn, ogrn, address, phone , email, vk, telegram , site, type) VALUES('${item.fullTitle}', '${item.shortTitle}', '${item.description}', '${item.supervisorFio}','${item.supervisorJobTitle}', '${item.inn}', '${item.ogrn}', '${item.address}', '${item.phone}', '${item.email}', '${item.vk}', '${item.telegram}', '${item.site}', '${itemOrigin.type}');`;

            connection.query(sql, function (err, results) {
                if (err) console.log(err);
                else console.log("Данные добавлены");
            });
        }
    })
})
*/

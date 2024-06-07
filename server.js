import express from 'express';
import organizationList from './controllers/organizationList.js';
import {connection} from "./connectToDB.js";
import {getOrganization} from "./models/organizations.js";
import educationList from "./controllers/educationList.js";
import path from "path";

const app = express()
const port = 3000
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.static('public'))
app.use('/api/organizations', organizationList);
app.use('/api/education_programs', educationList);

app.get('/bag_tracker', async (req, res) => {
    res.sendFile(path.join(path.resolve("."), '/bugs.html'));
});


app.listen(port, () => {
    console.log(`Сервер успешно запущем на порту: ${port}`)
});

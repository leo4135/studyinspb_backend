import express from 'express';
import organizationList from './controllers/organizationList.js';
import {connection} from "./connectToDB.js";
import {getOrganization} from "./models/organizations.js";
import educationList from "./controllers/educationList.js";
import path from "path";
import newsList from "./controllers/newsList.js";

const app = express()
const port = 3000
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.static('public'));
app.use('/organizations', express.static('public'));
app.use('/programs', express.static('public'));
app.use('/api/organizations', organizationList);
app.use('/api/education_programs', educationList);
app.use('/api/news', newsList);

app.get('/bag_tracker', async (req, res) => {
    res.sendFile(path.join(path.resolve("."), '/bugs.html'));
});


app.listen(port, '127.0.0.1', () => {
    console.log(`Сервер успешно запущем на порту: ${port}`)
});

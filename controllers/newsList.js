import express from "express";
import {getNews} from "../models/news.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    getNews(res)
});
export default router;
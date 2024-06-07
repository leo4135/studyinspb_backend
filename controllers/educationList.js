import express from "express";
import {getEducation} from "../models/educations.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    getEducation(res)
});
export default router;
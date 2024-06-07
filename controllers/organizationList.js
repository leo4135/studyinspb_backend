import { getOrganization } from "../models/organizations.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    getOrganization(res);
});
export default router;
import express from "express";
import { contact } from "../Controller/ContactController.js";

const router = express.Router();

router.post("/", contact);

export default router;

import express from 'express'
import { register } from '../controller/userController.js';
import upload from '../multer.js';

const router = express.Router()
router.post("/create-user", upload.single("file"), register)

export default router;
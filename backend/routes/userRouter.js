import express from 'express'
import { register } from '../controller/userController.js';
import { upload } from '../multer.js';

const router = express.Router()
router.post("/register", upload.single("avatar"), register)

export default router;
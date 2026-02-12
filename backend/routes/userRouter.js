import express from 'express'
import { register } from '../controller/userController.js';
import upload from '../multer.js';
import { catchAsyncError } from '../middleware/catchAsyncError.js';

const router = express.Router()
router.post("/create-user", upload.single("file"), register)
router.post("/activation", activateUser)

export default router;
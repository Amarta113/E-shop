import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express"
import { errorMiddleware } from "./middleware/error.js";

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credential: true
}))
app.get('/', (req, res) => {res.json({success: true, message: "server is running"})})
app.use(errorMiddleware)


const PORT = process.env.PORT || 8000
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`)
    console.log(`Shutting down the server for unhandled promise rejection`)
    server.close(() => {
        process.exit(1)
    })
})



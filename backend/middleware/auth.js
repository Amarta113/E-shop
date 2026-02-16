import jwt from "jsonwebtoken"
import { catchAsyncError } from "./catchAsyncError"
import { User } from "../models/userModel"

export const isAuthenticated = catchAsyncError(async(req, res, next) => {
    try{
        const { token } = req.cookies
        if(!token){
            return next(new ErrorHandler("Please login to access this resource", 401))
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = User.findByeId(decoded.id)
        if(!req.user){
            return next(new ErrorHandler("User not found", 404))
        }
        next()
    } catch(error){
        return next(new ErrorHandler("Invalid token", 401))
    }
})
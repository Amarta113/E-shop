import ErrorHandler from '../middleware/error.js'
import { catchAsyncError } from '../middleware/catchAsyncError.js'
import { User } from '../models/userModel.js'

export const register = catchAsyncError(async(req, res, next) => {
    try{
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return next(new ErrorHandler("All fields are required", 400))
        }
        const existingUser = await User.findOne({email})

        if(existingUser){
            // cleanup image if email already exists
            if(req.file?.filename){
                const publicId = req.file.filename.split(".")[0]
                await cloudinary.uploader.destroy(`ecommerce_uploads/${publicId}`)
            }
            return next(new ErrorHandler("Email is already used.", 400))
        }

        if(!req.file?.path || !req.file?.filename){
            return next(new ErrorHandler("Please upload an avatar!", 400))
        }

        const userData = {
            name,
            email,
            password,
            accountVerified: true,
            avatar: {
                public_Id: req.file.filename.split(".")[0],
                url: req.file.path
            }
        }

        const user = await User.create(userData);

        const activationTokens = createActivationTokens(userData)


        const verificationCode = await user.generateVerificationCode();
        await user.save()
        sendVerificationCode(
            verificationCode,
            name,
            email)
        res.status(200).json({
            success: true
        })
    } catch(error){
        next(error)
    }
})

async function sendVerificationCode(verificationCode, name, email){
    try {  
        const message = generateEmailTemplate(verificationCode)
        sendEmail({email, subject: "Your Verification Code", message})
    }
        catch (error) {
        throw new ErrorHandler("Failed to send verification code.", 500)
    }
}

function createActivationTokens(user) {
    
}

function generateEmailTemplate(verificationCode){
    return `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Account Verification</title>
            </head>
        <body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td align="center" style="padding:30px 0;">
                <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
                    
                    <tr>
                    <td style="background:#4f46e5; color:#ffffff; padding:20px; text-align:center; font-size:22px; font-weight:bold;">
                        Verify Your Account
                    </td>
                    </tr>

                    <tr>
                    <td style="padding:25px; color:#333333; font-size:16px;">
                        <p>Hello,</p>
                        <p>Thank you for registering. Please use the verification code below to activate your account:</p>

                        <div style="margin:25px 0; text-align:center;">
                        <span style="display:inline-block; background:#f0f0f0; padding:15px 25px; font-size:24px; letter-spacing:4px; font-weight:bold; border-radius:6px;">
                            ${verificationCode}
                        </span>
                        </div>

                        <p>This code will expire in 10 minutes.</p>
                        <p>If you did not request this, please ignore this email.</p>

                        <p style="margin-top:30px;">Regards,<br><strong>Your App Team</strong></p>
                    </td>
                    </tr>
                    <tr>
                    <td style="background:#f9f9f9; padding:15px; text-align:center; font-size:12px; color:#888;">
                        © ${new Date().getFullYear()} Your App. All rights reserved.
                    </td>
                    </tr>

                </table>
                </td>
            </tr>
            </table>
        </body>
        </html>
        `

}
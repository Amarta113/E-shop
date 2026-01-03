import mongoose from "mongoose";

const connectDb = async() => {

    try{
        // Check if already connected
        if (mongoose.connection.readyState === 1) {
            console.log("Database already connected");
            return;
        }

        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URI environment variable is not set");
        }

        const data = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

export default connectDb;
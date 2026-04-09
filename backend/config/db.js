import mongoose from "mongoose";
import 'dotenv/config';   // loads .env automatically

export const connectDB = async () => {
    const uri =  process.env.MONGO_URI ;
    if (!uri) {
        console.error("❌ MONGO_URI is missing in .env file");
        return;
    }

    try {
        await mongoose.connect(uri);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
    }
};

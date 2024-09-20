import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI,  {
            dbName: "Trek-Fashions",
        });
        console.log(`MongoDB Connected:`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

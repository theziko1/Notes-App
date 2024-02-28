import env from "dotenv";
import mongoose from "mongoose";
env.config();

const {MONGODB_URI} = process.env
const Connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("Connected To MongoDB");
  } catch (error) {
    throw new Error("Error Connecting to mongoDB")
  }
}

export default Connect;
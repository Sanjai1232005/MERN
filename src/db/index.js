import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected succesfully");

    }catch(err){
        console.log("Could not connect to database", err);
        process.exit(1);
    }
}

export default connectDB;
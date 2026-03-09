import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to the database");

    }catch(err){
        console.log("Error connecting to database", err);
        process.exit(1);

    }
}

export default connectDB;
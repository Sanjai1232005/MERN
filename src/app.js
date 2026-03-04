import express from 'express'
import middle from './middlewares/middle.js'
import morgan from "morgan"
import cors from "cors"

import healthcheckroute from "./routes/healthcheckroute.js"


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));
app.use(morgan("tiny"));
app.use("/api/v1/healthcheck",healthcheckroute);



app.get('/',(req,res)=>{
    res.send('hello nigga');
})

app.get('/insta',middle,(req,res)=>{
    res.send('welcome to insta nigga');
})

export default app;
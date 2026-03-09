import express from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/healthcheckroute.js"

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors({
    origin:process.env.CORS_ORIGIN || "http://localhost:8000",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use("/api/v1/healthcheck",router);



app.get("/",(req,res)=>{
    res.send("hello nigga");
});

app.get('/insta',(req,res)=>{
    res.send("welcome to insta nigga");
});

export default app;

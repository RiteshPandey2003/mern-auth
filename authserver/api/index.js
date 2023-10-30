import express from "express";
import mongoose from "mongoose";
import user_route from "./routes/user_route.js";
import auth_route from "./routes/auth_route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connect");
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.use(express.json());

app.listen( 3000, () =>{
    console.log("server is running in port 3000");
})

app.use('/api/user', user_route);
app.use('/api/auth', auth_route);
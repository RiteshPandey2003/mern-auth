import express from "express";
import mongoose from "mongoose";
import user_route from "./routes/user_route.js";
import auth_route from "./routes/auth_route.js";
import dotenv from "dotenv";
import path from 'path';
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connect");
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(cookieParser())

const __dirname = path.resolve();

app.use(express.json());

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });

app.listen( 3000, () =>{
    console.log("server is running in port 3000");
})

app.use('/api/user', user_route);
app.use('/api/auth', auth_route);

//middleware
app.use((err,req,res,next)=>{
   const statusCode = err.statusCode || 500;
   const message = err.message || "internal server error";
   return res.status(statusCode).json({
    success : false,
    message,
    statusCode : statusCode
   });
})
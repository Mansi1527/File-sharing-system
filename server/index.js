import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import dbconnection from "./database/db.js";

const app=express();
app.use(cors());
app.use('/',router);
const PORT =8000;
dbconnection();
app.listen(PORT,()=>console.log(`server running at ${PORT}`));//()=>is a call back funtion

import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv";
dotenv.config();

const dbconnection= async()=>{
    const MONODB_URI=`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-rujv8b2-shard-00-00.j2zfgcq.mongodb.net:27017,ac-rujv8b2-shard-00-01.j2zfgcq.mongodb.net:27017,ac-rujv8b2-shard-00-02.j2zfgcq.mongodb.net:27017/?ssl=true&replicaSet=atlas-gew5tu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const MONODB_URI=`mongodb+srv://mansiy1527:${process.env.MONGODB_PASSWORD}@filesharing.j2zfgcq.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
        console.log('database connected successfully');
    }
    catch(error){
        console.error('error while connecting with server',error.message);
    }
}
export default dbconnection;




import mongoose from "mongoose";
const dbconnection= async()=>{
    const MONODB_URI=`mongodb://mansiy1527:Vijay@ac-rujv8b2-shard-00-00.j2zfgcq.mongodb.net:27017,ac-rujv8b2-shard-00-01.j2zfgcq.mongodb.net:27017,ac-rujv8b2-shard-00-02.j2zfgcq.mongodb.net:27017/?ssl=true&replicaSet=atlas-gew5tu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
        console.log('database connected successfully');
    }
    catch(error){
        console.error('error while connecting with server',error.message);
    }
}
export default dbconnection;




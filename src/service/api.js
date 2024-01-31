import axios from 'axios';

const API_URI='http://localhost:8000';
export const uploadFile= async(data)=>{
    try{
      let response= await axios.post(`${API_URI}/upload`,data);
      return response.data;
    }
    catch (error){
        console.error("error during calling api",error.message);
    }
}


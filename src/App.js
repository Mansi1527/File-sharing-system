import {useState ,useEffect, useRef } from "react";
import './App.css';
import {uploadFile} from './service/api';

function App() {
  const [file,setFile]=useState('');
  const [result,setResult]=useState('');

  const fileInputRef=useRef();

  
  
  //const logo = "https://c1.wallpaperflare.com/preview/511/343/665/lifestyle-objects-people.jpg";
  const logo ="https://media.istockphoto.com/videos/abstract-background-black-and-white-computer-motherboard-16-video-id1133856296?s=640x640"

  useEffect(()=>{
    const getImage= async()=>{
        if(file){
          const data= new FormData();
          data.append("name",file.name);
          data.append("file",file);

          const response=await uploadFile(data);
          setResult(response.path);
          
        }
    }
    getImage();
  } ,[file])
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }
  return (
    <header>
    <div className="container">
      <img src={logo} alt="background"/>
      <div className="textimage">  
      <h1>file sharing system</h1>
      <p>Enjoy uploading and sharing across the globe!</p>
      <button onClick={()=>onUploadClick()}>upload</button>
      <input type="file" 
      ref={fileInputRef}
       style={{display:"none"}}
       onChange={(e)=> setFile(e.target.files[0])}
       />

       <a href={result} target="_blank" rel="noreferrer">{result}</a>
      </div>
     
      <div></div>
    </div>
    </header>
  );
}

export default App;





import './App.css';
import { useState } from 'react';

//함수형 컴포넌트
function App() {
 const [id,setId] = useState("")   
 const handleChange = (e) => {
    setId(e.target.value)
    e.target.name = e.target.value
 }

 const submitId = ()=>{
    const post = {
        plzid : id,
    }
   
    fetch("http://localhost:3001/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    }) .then((res)=>res.json())
    .then((json)=>{
      console.log(json.text);
    });
  };
 
  return (
    <div id="App">
             <input onChange={handleChange} name="id"></input>
             <button onClick={submitId}>Submit</button>
             <h1>{id}</h1>
    </div>
  );
}

export default App;

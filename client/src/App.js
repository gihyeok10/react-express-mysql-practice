
import './App.css';
import { useState } from 'react';
import "./App.css";
import Customer from "./component/Customer"
import {Table,TableBody,TableHead,TableCell,Paper} from "@material-ui/core";

import {withStyles} from "@mui/material";
//함수형 컴포넌트

const styles = theme => ({
  root:{
    with:'100%',
    marginTop:theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})
function App() {
 const [id,setId] = useState("")   
 const handleChange = (e) => {
    setId(e.target.value)
    e.target.name = e.target.value
 }
  const customers = [
    {
      id: 1,
      image: "https://placeimg.com/64/64/any",
      name: "홍길동",
      birthday: "978222",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/1",
      name: "볼카노프스키",
      birthday: "960212",
      gender: "남자",
      job: "알바생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/2",
      name: "김기혁",
      birthday: "981222",
      gender: "남자",
      job: "프로그래머",
    },
  ];

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
   
    <Paper className="root">
      <Table className="table">
      <TableHead>
        <TableCell>번호</TableCell>
        <TableCell>이미지</TableCell>
        <TableCell>이름</TableCell>
        <TableCell>생년원일</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>직업</TableCell>
      </TableHead>
      <TableBody>
      {customers &&
        customers.map((item) => {
          return (
            <Customer
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              birthday={item.birthday}
              gender={item.gender}
              job={item.job}
            />
          );
        })}
        </TableBody>
        </Table>
    </Paper>
  );
}

export default App;
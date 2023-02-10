import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    name : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId = ()=>{
    const post ={
      test : this.state.name,
    };
   
    fetch("http://localhost:3001/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        name : json.text,
      });
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name ="name"/>
        <button onClick = {this.submitId}>Submit</button>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
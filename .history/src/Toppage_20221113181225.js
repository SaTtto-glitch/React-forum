import React, { useState, useEffect } from "react";
import Toppage from "./Toppage";
import NewThreads from "./NewThreads";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";

  
  useEffect(() => {
    axios.get(`${props.baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(post);
  return (
    <div>
        <Header />
        <div>新着スレッド</div>


    </div>
  );
}

export default App;
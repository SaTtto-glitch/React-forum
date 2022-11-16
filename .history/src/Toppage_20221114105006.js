import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";
  const [post, setpost] = useState([]);
  const { state } = useLocation();
  const [post2, setpost2] = useState(state.state);

  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  useEffect(() => {
    setpost2(state.state);
  }, [post]);
  
  console.log(post2);

  const threadsList = post.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number.title}</div>
    </li>
  ));



  return (
    <div>
      <Header />
      <div className="title">新着スレッド</div>
      <div className="threads">
        <ul>{threadsList}</ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";
  const [post, setpost] = useState([]);
    const [post2, setpost2] = useState(state.state);

  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  useEffect(() => {
    setpost2(state.state);
  }, [post]);

  const threadsList = post.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number.title}</div>
    </li>
  ));

  console.log(threadsList);

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

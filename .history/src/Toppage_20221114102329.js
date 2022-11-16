import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";
  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  const keyList = Object.keys(post);

  const threadsList = post.map((number,i) =>
   <li key={i}>  <number
   key={i}
   id={number.id}
   title={number.title} /></li>);

  console.log(threadsList);

  return (
    <div>
      <Header />
      <div>新着スレッド</div>
      <div className="threadsList">
        <ul>{threadsList}</ul>
      </div>
    </div>
  );
}

export default App;

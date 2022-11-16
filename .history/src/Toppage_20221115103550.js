import React, { useState, useEffect } from "react";
import { useLocation,Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";


function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState(null);
  const { state } = useLocation();

  

  useEffect(() => {
    axios.get(`${baseURL}/threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(test);

  const threadsList = post.map((number) => (
    <li key={number.id}>
      <div className="threadsList"><Link to={`/thread/${number.id}`}>{number.title}</Link></div>
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

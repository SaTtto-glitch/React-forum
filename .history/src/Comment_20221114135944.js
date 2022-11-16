import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState([]);
 
  useEffect(() => {
    axios.get(`${baseURL}/threads/10/posts`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(post);

  const threadsList = post.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number.title}</div>
    </li>
  ));

  return (
    <div>
      <div className="title">TechTrainってどうなの？</div>
      <div className="threads">
        <ul>{threadsList}</ul>
      </div>
    </div>
  );
}

export default App;

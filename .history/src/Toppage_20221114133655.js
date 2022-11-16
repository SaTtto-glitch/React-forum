import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState(null);
  const { state } = useLocation();
  const [post2, setpost2] = useState(state.state);

  useEffect(() => {
    axios.get(`${baseURL}/threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  useEffect(() => {
    setpost2(state.state);
  }, []);

  if (post2 == null) {
    var test = post;
  } else {
    var test = post2;
  }

  console.log(test);

  const threadsList = test.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number.title}</div>
    </li>
  ));

  return (
    <div>
      <div className="header">
        <div className="header1">掲示板</div>
        <Link to={`/new`}>スレッドを立てる</Link>
      </div>

      <div className="title">新着スレッド</div>
      <div className="threads">
        <ul>{threadsList}</ul>
      </div>
    </div>
  );
}

export default App;

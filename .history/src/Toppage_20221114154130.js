import React, { useState, useEffect } from "react";
import { useLocation,useParams,Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";


function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState(null);
  const { state } = useLocation();
  const { threadId } = useParams();
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
      <div className="threadsList"><Link to={`/thread/${number.id}`}>{number.title}</Link></div>
    </li>
  ));




  return (
    <div>
      <Header />
      <div className="title">新着スレッド</div>
      <div className="threads">
        <ul>{threadsList}</ul>
        <Link to={`/thread/${threadId}`}>Sample Page2 With Query2</Link>
      </div>
    </div>
  );
}

export default App;

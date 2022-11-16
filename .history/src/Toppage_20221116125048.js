import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState([]);
  const { Location } = useLocation();
  const [post2, setpost2] = useState(Location.state);

  console.log(Location.state);

  useEffect(() => {
    axios.get(`${baseURL}/threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  useEffect(() => {
    setpost2(state.state);
  }, [post]);

  if (post2 == null) {
    var test = post;
  } else {
    var test = post2;
  }

  const threadsList = test.map((number) => (
    <li key={number.id}>
      <div className="threadList">
        <Link to={`/thread/${number.id}`} state={{ state: number.title }}>
          {number.title}
        </Link>
      </div>
    </li>
  ));

  return (
    <div>
      <Header />
      <div className="container">
        <p className="title">新着スレッド</p>
        <div className="threads">
          <ul>{threadsList}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;

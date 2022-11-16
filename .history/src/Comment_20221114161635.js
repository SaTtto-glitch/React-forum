import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState([]);
  const { thread_id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/threads/${thread_id}/posts`).then((response) => {
      setpost(response.data);
    });
  }, []);

  const test = Object.keys(post);

  console.log(test.length);

  const threadsList = test.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number}</div>
    </li>
  ));

  return (
    <div>
      <div className="title">TechTrain</div>
      <div className="threads">
        <ul>{threadsList}</ul>
      </div>
    </div>
  );
}

export default Comment;

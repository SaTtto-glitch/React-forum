import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  let { threadId } = useParams();
  const [post, setpost] = useState();
 
  useEffect(() => {
    axios.get(`${baseURL}/threads/${threadId}/posts`).then((response) => {
      setpost(response.data);
    });
  }, []);

 

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

export default Comment;

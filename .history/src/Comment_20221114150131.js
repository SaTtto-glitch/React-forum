import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment(props) {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  let { threadId } = useParams();
  const [post, setpost] = useState([]);
 
  useEffect(() => {
    axios.get(`${baseURL}/threads/${threadId}/posts`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(threadId);


  return (
    <div>
      <div className="title">TechTrainってどうなの？</div>

    </div>
  );
}

export default Comment;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState();
  const { thread_id } = useParams();



  useEffect(() => {
    axios.get(`${baseURL}/threads${thread_id}/post`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(post);
  
  const threadsList = post.map((number) => (
    <li key={number}>
      <div className="threadsList">{number}</div>
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

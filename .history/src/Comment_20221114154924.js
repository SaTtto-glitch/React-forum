import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState();
  const { threadId } = useParams();

  console.log(threadId);

  useEffect(() => {
    axios.get(`${baseURL}/threads${threadId}/post`).then((response) => {
      setpost(response.data);
    });
  }, []);


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

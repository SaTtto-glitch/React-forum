import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const { threadId } = useParams();
  const [post, setpost] = useState();
 
   console.log(threadId);


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

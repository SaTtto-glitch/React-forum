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

  const test =         test.map((number) => (
        <li key={number}>
          <div className="threadsList">{number}</div>
        </li>

  console.log(test.length);

  function threadsList() {
    if (test.length === 0) {
        <div>まだ投稿はありません。</div>
    } else {

      ));
    }
  }

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

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
  console.log(post);

  const threadsList = test.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number.message}</div>
    </li>
  ));

  return (
    <div>
      <div className="title">TechTrain</div>
      <div>スレッド新規作成</div>
      <input value={threadsName} onChange={handleChange} />
      <button onClick={createNewthreads}>作成</button>
      
      <div className="threads">
        <ul>{threadsList}</ul>
      </div>

    </div>
  );
}

export default Comment;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const { thread_id } = useParams();
  const [users, setUsers] = useState(null);
  const [Name, setName] = useState("");

  //コメント一覧取得
  useEffect(() => {
    axios
      .get(`${baseURL}/threads/${thread_id}/posts`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(users)

  
  const test = users.posts;
  test.map((number) => console.log(number.post));

  const threadsList = test.map((number) => (
    <li key={number.id}>
      <div className="threadsList">{number.post}</div>
    </li>
  ));

  //コメント投稿
  function handleChange(e) {
    setName(e.target.value);
  }

  const createNewthreads = () => {
    axios
      .post(`${baseURL}/threads/${thread_id}/posts`, {
        post: Name,
      })
      .then((response) => {
        setUsers([...users, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  
  return (
    <div>
      <div className="title">TechTrain</div>

      <div>コメント投稿</div>
      <input value={Name} onChange={handleChange} />
      <button onClick={createNewthreads}>作成</button>

      <div className="threads">
        <ul>{threadsList}</ul>
      </div>
    </div>

  );
}

export default Comment;

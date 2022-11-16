import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const { thread_id } = useParams();
  const [users, setUsers] = useState();
  const [Name, setName] = useState("");

  //コメント一覧取得
  useEffect(() => {
    axios
      .get(`${baseURL}/threads/${thread_id}/posts`)
      .then((response) => {
        setUsers(response.data.posts);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(users)

  const Comment = ({ text }) => (
    <div>
      <p>{text}</p>
    </div>
  );

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
      <div>
        <Link to="/">戻る</Link>
      </div>

      <div>コメント投稿</div>
      <input value={Name} onChange={handleChange} />
      <button onClick={createNewthreads}>作成</button>
      <div className="threads">
        <ul>
            
        </ul>
      </div>
    </div>
  );
}

export default Comment;

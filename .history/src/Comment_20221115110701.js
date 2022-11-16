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

  console.log(users);

  const funcPromise = (result) => {
    return new Promise((resolve, reject) => {
      if (result) {
        for (let i = 0; i > 10; i++) {
          return resolve(users.posts[i]);
        }
        
        return;
      }
      reject("error");
    });
  };

  (async () => {
    const array = users.posts;

    const res = await Promise.allSettled(
      array.map((v) => {
        return funcPromise(v);
      })
    );

    console.log(res.map((r) => r.value)); // [undefined, "ok", undefined]
  })();

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
        <ul>{funcPromise}</ul>
      </div>
    </div>
  );
}

export default Comment;

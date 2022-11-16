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

  async function f() {
    const array = users.posts;

    for(let i=0;i<array.length;i++){
      console.log(array[i].post)
    }
    const funcPromise = () => {
      return new Promise((resolve) => {
        for(let i=0;i<array.length;i++){
            console.log(array[i].post)
          }
      });
    };

    (async () => {
      const array = users.posts;

      for(let i=0;i<array.length;i++){
        console.log(array[i].post)
      }
      
      const res = await Promise.allSettled(
        array.map((number) => {
          return funcPromise(number);
        })
      );
      console.log(res.map((r) => r.value)); 
    })();
  }

  f();

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
        <ul></ul>
      </div>
    </div>
  );
}

export default Comment;

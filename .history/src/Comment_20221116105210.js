import React, { useState, useEffect } from "react";
import { useParams, Link,useLocation } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Comment() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const { thread_id } = useParams();
  const [users, setUsers] = useState();
  const [Name, setName] = useState("");
  
  const location = useLocation();
  const [post, setpost] = useState(location.state);
  console.log(post)


  //コメント一覧取得
  useEffect(() => {
    axios
      .get(`${baseURL}/threads/${thread_id}/posts`)
      .then((response) => {
        setUsers(response.data.posts);
      })
      .catch((error) => console.log(error));
  }, []);

  //コメント投稿
  function handleChange(e) {
    setName(e.target.value);
  }

  console.log(users)

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

  const Comment = ({ text }) => (
    <div>
      <p>{text}</p>
    </div>
  );

  return (
    <div>
      <div className="title">{post}</div>
      <div>
        <Link to="/">戻る</Link>
      </div>

      <div>コメント投稿</div>
      <input value={Name} onChange={handleChange} />
      <button onClick={createNewthreads}>作成</button>
      <div className="threads">
        <ul>
          {users?.map((item) => (
            <Comment text={item.post} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Comment;

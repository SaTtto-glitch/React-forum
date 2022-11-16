//スレッド新規作成
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function NewThreads() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState([]);
  const [threadsName, setthreadsName] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  function handleChange(e) {
    setthreadsName(e.target.value);
  }

  const createNewthreads = () => {
    axios
      .post(`${baseURL}//threads`, {
        title: threadsName,
      })
      .then((response) => {
        setpost([...post, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>スレッド新規作成</div>
      <input value={threadsName} onChange={handleChange} />
      <button onClick={createNewthreads}>作成</button>
      <Link to={`/`} state={{ state: post }}>
        戻る
      </Link>
    </div>
  );
}
export default NewThreads;

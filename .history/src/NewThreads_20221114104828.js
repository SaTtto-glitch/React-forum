//スレッド新規作成
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function NewThreads() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";
  const { state } = useLocation();
  const [post, setpost] = useState(null);
  const [threadsName, setthreadsName] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(post);

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

//スレッド新規作成
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

function NewThreads(props) {

  function handleChange(e) {
    setthreadsName(e.target.value);
  }

  const createNewthreads = () => {
    axios
      .post(`${props.baseURL}//threads`, {
        title: threadsName,
      })
      .then((response) => {
        setpost([...props.post, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(post);

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

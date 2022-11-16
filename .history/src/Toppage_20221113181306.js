import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";


  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  console.log(post);
  return (
    <div>
        <Header />
        <div>新着スレッド</div>


    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";
  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  const keyword = o

  console.log(post);
  return (
    <div>
      <Header />
      <div>新着スレッド</div>
      <li></li>
    </div>
  );
}

export default App;

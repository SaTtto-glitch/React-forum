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

  const keyList = Object.keys(post);

  const threadsList = keyList.map((threadsList, i) => 
  <li key={i}>{threadsList}</li>);

  console.log(post);
  return (
    <div>
      <Header />
      <div>新着スレッド</div>
      <div c></>{threadsList}
    </div>
  );
}

export default App;

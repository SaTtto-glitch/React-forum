import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";
  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}//threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  const threadsList = post.map((number) => <li key={number.id}>{number.title}</li>);

  console.log(threadsList);

  return (
    <div className="threads">
      <Header />
      <div className="title">新着スレッド</div>
      <div>
        
          <ul><div className="threadsList">{threadsList}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;

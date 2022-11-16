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

  const keyList = Object.keys(post);

  const threadsList = keyList.map((threadsList, i) => <li key={i}>{threadsList}</li>);

  console.log(post);
  return (
    <div>
a
    </div>
  );
}

export default App;

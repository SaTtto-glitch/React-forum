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

  const keyList = Object.keys(post)

  console.log(post);
  return (
    <div>
      <Header />
      <div>新着スレッド</div>
      const breedList = keyList.map(breed => (
    <option key={breed} value={breed}>
      {breed}
    </option>
      <li></li>
    </div>
  );
}

export default App;

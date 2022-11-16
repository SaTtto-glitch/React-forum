import React from "react";
import Toppage from "./Toppage";
import NewThreads from "./NewThreads";
import Comment from "./Comment";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
    return (
      <Routes>
        <Route exact path="/" element={<Toppage base/>} />
        <Route exact path="/thread" element={<Comment />} />
        <Route exact path="/new" element={<NewThreads />} />
      </Routes>
  );
}

export default App;

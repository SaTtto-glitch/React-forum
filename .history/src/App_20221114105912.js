import React from "react";
import Toppage from "./Toppage";
import NewThreads from "./NewThreads";
import Comment from "./Comment";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  const baseURL = "https://railway-react-bulletin-board.herokuapp.com";

  
  return (
      <Routes>
        <Route exact path="/" element={<Toppage />} />
        <Route exact path="/thread" element={<Comment />} />
        <Route exact path="/new" element={<NewThreads />} />
      </Routes>
  );
}

export default App;

import React from "react";
import Toppage from "./Toppage";
import NewThreads from "./NewThreads";
import Comment from "./Comment";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

    return (
      <Routes>
        <Route exact path="/" element={<Toppage/>} />
        <Route path="/thread/:thread_id"  element={<Comment}  />
        <Route exact path="/new" element={<NewThreads />} />
      </Routes>
  );
}

export default App;

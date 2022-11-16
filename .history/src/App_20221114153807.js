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
        <Route exact path="/new" element={<NewThreads />} />
        <Route path="/thread/:thread_id"  element={<Toppage />}  />
      </Routes>
  );
}

export default App;

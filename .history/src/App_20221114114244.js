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
        <Route exact path="/thread" element={<Comment baseURL={baseURL}/>} />
        <Route exact path="/new" element={<NewThreads baseURL={baseURL}/>} />
      </Routes>
  );
}

export default App;

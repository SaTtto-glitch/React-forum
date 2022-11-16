import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header1">掲示板</div>


    
      <Link to={`/new`}>スレッドを立てる</Link>
    </div>
  );
}

export default Header;

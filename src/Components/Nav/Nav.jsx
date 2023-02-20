import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>ContactOS</h1>
          </div>
          <div className="menu">
            <Link to={'/auth/register'}>Login 🌎</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav;

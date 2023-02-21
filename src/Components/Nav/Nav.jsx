import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import useUser from "../../Hooks/useUser";

function Nav() {
  const { isLogged, LogOut } = useUser()
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>ContactOS</h1>
          </div>
          <div className="menu">
            {
              isLogged ?
                <button onClick={LogOut}>Salir</button>
                :
                <Link to={'/auth/register'}>Login 🌎</Link>
            }
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav;

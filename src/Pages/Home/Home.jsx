import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";

function Home() {
  const { isLogged, user } = useUser()
  return (
    <>
      <div>Home</div>;
      <p>user {isLogged ? user.email : 'no logeado'}</p>
      <button>
        <Link to={"/contacts"}>contacts</Link>
      </button>
    </>
  );
}

export default Home;

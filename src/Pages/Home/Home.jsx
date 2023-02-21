import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";

function Home() {
  const { isLogged, user } = useUser()
  return (
    <>
      <p>user {isLogged ? user.email : 'no logeado'}</p>
    </>
  );
}

export default Home;

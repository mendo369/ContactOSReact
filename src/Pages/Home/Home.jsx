import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>;
      <button>
        <Link to={"/contacts"}>contacts</Link>
      </button>
    </>
  );
}

export default Home;

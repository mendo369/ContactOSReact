import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <>
      <div>Contacts</div>;
      <button>
        <Link to={"/"}>Home</Link>
      </button>
    </>
  );
}

export default Contacts;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Index() {
  return (<>
    <Nav />
    <Outlet />
    <Link to={'contacts'}>contacts</Link>
    <Link to={'home'}>home</Link>
  </>
  );
}

export default Index;

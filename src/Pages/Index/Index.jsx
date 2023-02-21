import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Index() {
  return (<>
    <Nav />
    <div className="views">

      <NavLink to={'contacts'} className={({ isActive }) =>
        isActive ? 'active-route' : undefined
      }>contacts</NavLink>
      <NavLink to={'home'} className={({ isActive }) =>
        isActive ? 'active-route' : undefined
      }>home</NavLink>
    </div>
    <Outlet />
  </>
  );
}

export default Index;

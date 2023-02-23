import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Index() {
  return (<>
    <Nav />
    <div className="views">

      <NavLink to={'notes'} className={({ isActive }) =>
        isActive ? 'active-route' : undefined
      }>Notes</NavLink>
      <NavLink to={''} className={({ isActive }) =>
        isActive ? 'active-route' : undefined
      }>contacts</NavLink>
      <NavLink to={'dates'} className={({ isActive }) =>
        isActive ? 'active-route' : undefined
      }>Dates</NavLink>
      {/* <NavLink to={'home'} className={({ isActive }) =>
        isActive ? 'active-route' : undefined
      }>home</NavLink> */}
    </div>
    <Outlet />
  </>
  );
}

export default Index;

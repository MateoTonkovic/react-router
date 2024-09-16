import React from "react";
import { Link, Outlet } from "react-router-dom";

function OutletExample() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/oulet-example/outlet-1" className="nav-link">
              outlet 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/oulet-example/outlet-2" className="nav-link">
              outlet-2
            </Link>
          </li>
        </ul>
      </nav>
      <h1>ESTE ES EL OULET</h1>
      <Outlet context={{ hola: 1 }} />
    </div>
  );
}

export default OutletExample;

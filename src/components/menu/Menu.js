import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  const online = false;
  return (
    <div className="menu-container">
      <div className="links">
        {!online ? (
          <div>
            <Link to="/auth/register"> Register </Link>
            <Link to="/auth/login"> Login </Link>
          </div>
        ) : (
          <div>
            <Link to="/home"> Home </Link>
            <Link to="/courses"> Courses </Link>
            <Link to="/profile"> Profile </Link>
          </div>
        )}
      </div>
      {online ? <button className="logout-button">Logout</button> : null}
    </div>
  );
}

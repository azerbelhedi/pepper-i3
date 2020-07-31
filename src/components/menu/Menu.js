import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { StoreContext } from "../../App";
import { logoutStore } from "../../storeFunctions";

export default function Menu() {
  const { store, setStore } = useContext(StoreContext);
  const { auth } = store;
  const { online } = auth;

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
      {online ? (
        <button
          className="logout-button"
          onClick={() => {
            logoutStore(store, setStore, {});
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
}

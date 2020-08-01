import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { StoreContext } from "../../App";
import { logoutStore, displayAlert, closeAlert } from "../../storeFunctions";

export default function Menu() {
  const { store, setStore } = useContext(StoreContext);
  const { auth } = store;
  const { online } = auth;

  const logoutAlert = () => {
    const alert = {
      display: true,
      text: "are you sure, you want to logout?",
      button1: { text: "go back", action: closeAlert },
      button2: { text: "yes", action: logoutStore },
    };
    displayAlert(store, setStore, alert);
  };

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
            {
              /* logoutStore(store, setStore, {}); */
            }
            logoutAlert();
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
}

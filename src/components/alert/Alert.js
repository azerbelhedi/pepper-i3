import React, { useContext } from "react";
import "./alert.css";
import { StoreContext } from "../../App";
import { closeAlert } from "../../storeFunctions";

export default function Alert() {
  const { store, setStore } = useContext(StoreContext);

  const { alert } = store;
  const { display, text, button1, button2 } = alert;

  if (!display) {
    return null;
  }
  return (
    <div className="alert-container">
      <div className="alert-background"></div>
      <div className="alert-box">
        <div className="alert-text">{text}</div>
        <div className="alert-buttons">
          <button
            onClick={() => {
              button1.action(store, setStore);
            }}
          >
            {button1.text}
          </button>
          <button
            onClick={() => {
              button2.action(store, setStore);
              closeAlert(store, setStore)
            }}
          >
            {button2.text}
          </button>
        </div>
      </div>
    </div>
  );
}

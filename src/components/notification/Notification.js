import React, { useContext } from "react";
import "./notification.css";
import { StoreContext } from "../../App";

export default function Notification() {
  const { store, setStore } = useContext(StoreContext);

  const { notification } = store;
  const { display, text } = notification;

  if (!display) {
    return null;
  }

  return (
    <div className="notification-container hide-notification">
      <div className="notification-text">{text}</div>
    </div>
  );
}

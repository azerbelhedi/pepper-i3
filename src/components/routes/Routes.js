import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import { StoreContext } from "../../App";

export default function Routes() {
  const { store, setStore } = useContext(StoreContext);
  const { auth } = store;
  const { online } = auth;

  return (
    <div className="routes-main-paper">
      {!online ? (
        <div>
          <Switch>
            <Route exact path="/auth/register">
              <h3>Register</h3>
            </Route>
            <Route exact path="/auth/login">
              <Login />
            </Route>
            <Route>
              <Login />
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
          <Switch>
            <Route exact path="/courses">
              <h3>courses</h3>
            </Route>
            <Route exact path="/profile">
              <h3>profile</h3>
            </Route>
            <Route exact path="/home">
              <h3>Home</h3>
            </Route>
            <Route>
              <h3>Home</h3>
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

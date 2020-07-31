import React from "react";
import { Route, Switch } from "react-router-dom";

export default function Routes() {
  const online = false;
  return (
    <div className="routes-main-paper">
      <Switch>
        {!online ? (
          <div>
            <Route exact path="/auth/register">
              <h3>Register</h3>
            </Route>
            <Route exact path="/auth/login">
              <h3>Login</h3>
            </Route>
          </div>
        ) : (
          <div>
            <Route exact path="/courses">
              <h3>courses</h3>
            </Route>
            <Route exact path="/profile">
              <h3>profile</h3>
            </Route>
            <Route exact path="/home">
              <h3>Home</h3>
            </Route>
          </div>
        )}

        <Route path="/">
          <h3>default redirect _ online ? home : login</h3>
        </Route>
      </Switch>
    </div>
  );
}

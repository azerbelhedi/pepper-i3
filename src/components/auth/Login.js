import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/queries";
import { setLoginStore } from "../../storeFunctions";
import { StoreContext } from "../../App";

export default function Login() {
  const { store, setStore } = useContext(StoreContext);

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
    confirm: false,
  });
  const { email, password, confirm } = userInputs;

  const tryLogin = () => {
    console.log("trying to login");
    setUserInputs({ ...userInputs, confirm: true });
  };

  const updateInput = (input) => {
    setUserInputs({ ...userInputs, [input.name]: input.value });
  };

  const { loading, error, data } = useQuery(LOGIN_MUTATION, {
    variables: { email, password },
  });

  if (confirm) {
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      console.log(error);
      return <div>Error</div>;
    }
    if (data) {
      console.log(data.login);
      setLoginStore(store, setStore, data.login);
      return <div>connected</div>;
    }
  }

  return (
    <div className="login-component">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          tryLogin();
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            updateInput(e.target);
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            updateInput(e.target);
          }}
        />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

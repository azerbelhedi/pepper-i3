import React, { useContext, useState } from "react";
import { StoreContext } from "../../App";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../graphql/mutations";

export default function Register() {
  let { store, setStore } = useContext(StoreContext);

  let [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    submit: false,
  });

  let { email, password, confirmPassword, submit } = userInput;

  const [createUser, { data }] = useMutation(CREATE_USER_MUTATION);

  if (submit && data && data.creatUser !== null) {
    console.log(data);
    return <div>User Created Successfullyl</div>;
  } else if (submit && data && data.creatUser === null) {
    console.log(data);
    return <div>error : email already used </div>;
  }

  return (
    <div className="register-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (password === confirmPassword) {
            console.log("pass go : ");
            console.log("trying  register mutation...");
            createUser({ variables: { email, password } });
            setUserInput({ ...userInput, submit: true });
          }
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setUserInput({ ...userInput, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setUserInput({ ...userInput, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setUserInput({ ...userInput, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <input type="submit" value="register" />
      </form>
    </div>
  );
}

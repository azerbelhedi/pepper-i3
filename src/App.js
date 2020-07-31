import React, { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";
import Menu from "./components/menu/Menu";
import { setLoginStore } from "./storeFunctions";

export const StoreContext = createContext();

function App() {
  const [store, setStore] = useState(storeData);

  if (!store.auth.online) {
    /* try to load auth data from cache*/
    let authToken = localStorage.getItem("AUTH_TOKEN");
    let tokenExpiration = localStorage.getItem("TOKEN_EXPIRATION");
    // console.log(authToken, tokenExpiration)
    // console.log(localStorage.getItem("asdas"))
    if (
      authToken !== null &&
      authToken !== "" &&
      tokenExpiration !== null &&
      tokenExpiration !== ""
    ) {
      setLoginStore(store, setStore, {
        token: authToken,
        tokenExpiration: tokenExpiration,
      });
    }
  }

  return (
    <div className="App">
      <StoreContext.Provider value={{ store, setStore }}>
        <Router>
          <Menu />
          <Routes />
        </Router>
      </StoreContext.Provider>
    </div>
  );
}

const storeData = {
  auth: {
    online: false,
    token: "",
    tokenExpiration: "",
    email: "",
    userId: "",
  },
  alert: {},
  notification: {},
  currentMenu: "home",
};

export default App;

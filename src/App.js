import React, { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";
import Menu from "./components/menu/Menu";

export const StoreContext = createContext();

function App() {
  const [store, setStore] = useState(storeData);

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

// all store functions are calles here

export const setLoginStore = (store, setStore, data) => {
  //   setStore({ ...store, auth: { ...store.auth, online: true } });
  setStore(() => {
    let { auth } = store;
    auth = {
      ...auth,
      online: true,
      token: data.token,
      userId: data.userId,
      tokenExpiration: data.tokenExpiration,
    };
    console.log(auth);
    store.auth = auth;
    return { ...store };
  });
};

export const logoutStore = (store, setStore, data) => {
  localStorage.removeItem("AUTH_TOKEN");
  localStorage.removeItem("TOKEN_EXPIRATION");

  setStore(() => {
    let { auth } = store;
    auth = { ...auth, online: false, token: "", tokenExpiration: 0 };
    store.auth = auth;
    return { ...store };
  });
};

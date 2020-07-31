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

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

  fireNotification(store, setStore, { text: "logged out", time: 4 });
};

export const closeAlert = (store, setStore) => {
  setStore(() => {
    let { alert } = store;
    alert.display = false;
    store.alert = alert;
    return { ...store };
  });
};

export const displayAlert = (store, setStore, alert) => {
  setStore(() => {
    store.alert = alert;
    return { ...store };
  });
};

export const fireNotification = (store, setStore, { text, time }) => {
  console.log("noti");
  console.log(text);
  setStore(() => {
    let { notification } = store;
    notification = { ...notification, text: text, display: true };
    store.notification = notification;
    return { ...store };
  });

  setTimeout(() => {
    setStore(() => {
      let { notification } = store;
      notification = { ...notification, display: false };
      store.notification = notification;
      return { ...store };
    });
  }, time * 1000);
};

import { createContext, useState } from "react";

export const AppContext = createContext();

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  image: "",
  token: token,
};

function AppContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  const loginUser = (name, email, image, token) => {
    // console.log(token);
    localStorage.setItem("token", JSON.stringify(token));
    setState({
      ...initialState,
      isAuth: true,
      name: name,
      email: email,
      image: image,
      token: token,
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setState({
      ...initialState,
      isAuth: false,
      name: "",
      email: "",
      image: "",
      token: null,
    });
  };
  return (
    <AppContext.Provider value={{ state, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

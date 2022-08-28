import { createContext, useState } from "react";

export const AppContext = createContext();

const initialState = {
  isAuth: false,
  token: null,
};

function AppContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  const loginUser = (token) => {
    setState({
      ...initialState,
      isAuth: true,
      token: token,
    });
  };

  const logoutUser = () => {
    setState({
      ...initialState,
      isAuth: false,
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

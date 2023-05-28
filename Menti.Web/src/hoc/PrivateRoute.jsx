import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({ children }) {
  const { state } = useContext(AppContext);
  const isAuth = state.isAuth;
  const token = state.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false && token === null) {
      return navigate("/login");
    }
  }, [isAuth, navigate, token]);
  //console.log(isAuth, token);
  return children;
}

export default PrivateRoute;

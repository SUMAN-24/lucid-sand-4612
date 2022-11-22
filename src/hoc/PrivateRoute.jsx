import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({ children }) {
  const { state } = useContext(AppContext);
  const isAuth = state.isAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth, navigate]);

  return children;
}

export default PrivateRoute;

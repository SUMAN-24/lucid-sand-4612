import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./App.css";

function FacebookLoginComponent({ buttonInfo }) {
  const [login, setLogin] = useState(false);
  // const [data, setData] = useState({});
  // const [picture, setPicture] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      setLogin(false);
      toast({
        title: "Invalid Credentials.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (response.accessToken && response.error) {
      setLogin(false);
      toast({
        title: "Error logging in.",
        description: "Try logging in from https",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (response.accessToken && !response.error) {
      //setIsLoading(true);
      // console.log(response);
      // console.log(response.accessToken);
      // setData(response);
      // setPicture(response.picture.data.url);
      setLogin(true);
      setDisabled(true);
      toast({
        title: "Logged in Successfully.",
        description: "Welcome!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/plans");
    }
  };

  // const logout = () => {
  //   setLogin(false);
  //   setData({});
  //   setPicture("");
  // };

  return (
    <div class="container">
      {!login && (
        <FacebookLogin
          appId="561943938882995"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
          render={(renderProps) => (
            // <button onClick={renderProps.onClick}>
            //   This is my custom FB button
            // </button>
            <Button
              onClick={renderProps.onClick}
              colorScheme="facebook"
              width="22.5rem"
              gap="1rem"
              disabled={disabled}
            >
              <BsFacebook size="1.5rem" />
              {buttonInfo}
            </Button>
          )}
        />
      )}

      {/* {login && navigate("/plans")} */}

      {/* {login && (
        <div className="card">
          <div className="card-body">
            <img className="rounded" src={picture} alt="Profile" />
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Email ID: {data.email}</p>
            <a href="/" className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default FacebookLoginComponent;

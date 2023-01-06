import React from "react";
import Navbar from "./Navbar/Navbar";

const ErrorPage = () => {
    const text = "homepage";
  return (
    <div>
      <Navbar
        display={text}
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default ErrorPage;

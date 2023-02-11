import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="login__bg">
        <img
          className="login__img"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt="login Logo"
        />
        <button className="loginSignIn__button">Sign In</button>
      </div>
    </div>
  );
}

export default LoginScreen;

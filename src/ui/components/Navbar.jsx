import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [style, setStyle] = useState(false);
  const navigate = useNavigate();

  const handleStyle = () => {
    setStyle(!style);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <header>
      <div className="logo">
        <a href="">
          <img src="./assets/img/logo.png" alt="logo" />
        </a>
      </div>
      <div className={`menu ${style ? "open" : ""}`} onClick={handleStyle}>
        <span></span>
      </div>
      <nav className={`aside ${style ? "toggle" : ""}`}>
        <ul className="nav">
          <li>
            <a className="btn" onClick={handleLogin}>
              Login
            </a>
          </li>
          <li>
            <a className="btn" onClick={handleRegister}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

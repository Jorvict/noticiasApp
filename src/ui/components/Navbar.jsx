import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Identity from "@arc-publishing/sdk-identity";

export const Navbar = () => {
  const [dataRegistro, setDataRegistro] = useState({});
  const navigate = useNavigate();

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
      <nav>
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

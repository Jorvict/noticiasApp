import React, { useEffect, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const LoginPage = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [isLogged, setIsLogged] = useState(false);
  const [dataLogin, setDataLogin] = useState({ emailLogin: "", passLogin: "" });

  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  if (isLogged) {
    return <Navigate to="/home" />;
  }

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailLogin, passLogin } = dataLogin;
    console.log(dataLogin);
    Identity.login(emailLogin, passLogin).then((rest) => setIsLogged(true));
    console.log(isLogged);
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-info-container">
          <h2 className="title">Inicia sesión</h2>
          <form className="form">
            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              placeholder="Correo electronico"
              autoFocus
              required
              name="emailLogin"
              autoComplete="new-off"
              onChange={handleInput}
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="password"
              name="passLogin"
              placeholder="*********"
              required
              onChange={handleInput}
            />
            <p className="parrafo">
              ¿Olvidaste tu contraseña?{" "}
              <span className="span">Presiona aquí</span>
            </p>
            <button
              // type="submit"
              className="btn py-3 my-3"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
            <p className="parrafo">
              ¿Aún no tienes una cuenta?{" "}
              <span className="span">Registrate</span>
            </p>
          </form>
        </div>
        <img className="image-container" src="assets/img/login.svg" alt="" />
      </div>
    </section>
  );
};

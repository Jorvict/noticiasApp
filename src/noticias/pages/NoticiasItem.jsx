import React from "react";

export const NoticiasItem = ({ title, description, url, urlToImagen }) => {
  console.log(urlToImagen);
  return (
    <div className="news-app">
      <div className="news-item">
        <img className="news-img" src={urlToImagen} alt={url} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

import React from "react";
import { Noticiam } from "./Noticiam";
import PropTypes from "prop-types";
import './noticiasItem.css'


export const NoticiasItem = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Noticiam key={article.url} article={article} />
      ))}
      {/* 
        <div className="news-app">
          <div className="news-item">
            <img className="news-img" src={urlToImagen} alt={url} />
            <div className="info">
              <h3>
                <a href={url}>{title}</a>
              </h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
       */}
    </>
  );
};

NoticiasItem.propTypes = {
  articles: PropTypes.array.isRequired,
};

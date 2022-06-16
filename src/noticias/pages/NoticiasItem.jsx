import React from "react";
import { Noticiam } from "./Noticiam";
import PropTypes from "prop-types";

export const NoticiasItem = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Noticiam key={article.url} article={article} />
      ))}
      {/* <div className="news-item">
        <img className="news-img" src={urlToImagen} alt={url} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div> */}
    </>
  );
};

NoticiasItem.propTypes = {
  articles: PropTypes.array.isRequired,
};

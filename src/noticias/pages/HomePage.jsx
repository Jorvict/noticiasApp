import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoticiasItem } from "./NoticiasItem";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-05-15&sortBy=publishedAt&apiKey=69536173bca64950846a532c71b5c150"
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div className="homePage">
      {articles.map((article, index) => {
        return (
          <NoticiasItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImagen={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoticiasItem } from "./NoticiasItem";
import { Formulario } from "./Formulario";

export const HomePage = () => {
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);
  console.log(articles);
  useEffect(() => {
    const requestApi = async () => {
      const key = "69536173bca64950846a532c71b5c150";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
    };
    requestApi();
  }, [category]);

  return (
    <div className="homePage">
      <Formulario setCategory={setCategory} />
      <NoticiasItem articles={articles} />
      {/* {articles.map((article, index) => {
        return (
          <NoticiasItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImagen={article.urlToImage}
          />
        );
      })} */}
    </div>
  );
};

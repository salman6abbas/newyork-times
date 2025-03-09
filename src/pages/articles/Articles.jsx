import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleItem from "../../components/ArticleItem/ArticleItem";
import useFetch from "../../hooks/useFetch/useFetch";

const API_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=pCwoiUgkEkwhRPfNME9Ovf7lwczW4Ab1";

const Articles = () => {
  const { data: articles, loading, error } = useFetch(API_URL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Top Articles</h1>
      <div data-cy="articles-list">
        {articles.map((article, index) => (
          <ArticleItem article={article} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

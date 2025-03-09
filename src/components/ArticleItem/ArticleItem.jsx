import React from "react";
import { Link } from "react-router-dom";
const ArticleItem = ({ article, index }) => {
  const firstImage = article.media?.[0]?.["media-metadata"]?.[1]?.url || null; // Get large image
  const { id, title } = article;
  return (
    <Link to={`/article/${index}`} state={{ article }} data-cy="article-item">
      <div key={id}>
        {firstImage ? (
          <img src={firstImage} alt={title} />
        ) : (
          <p>No image available</p>
        )}
        <h3 data-cy="article-title">{title}</h3>
      </div>
    </Link>
  );
};

export default ArticleItem;

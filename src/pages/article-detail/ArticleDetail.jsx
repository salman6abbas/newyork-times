import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop/useScrollToTop";

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  useScrollToTop();

  if (!article) {
    return <p>Article not found.</p>;
  }

  const firstImage = article.media?.[0]?.["media-metadata"]?.[2]?.url || null;
  const { title, byline, abstract } = article;

  return (
    <div style={{ padding: 6 }}>
      <button onClick={() => navigate(-1)}>← Back to Articles</button>
      {firstImage && (
        <img
          src={firstImage}
          alt={title}
          style={{ width: "100%", height: "80vh", borderRadius: "10px" }}
        />
      )}
      <h1 data-cy="article-title">{title}</h1>
      <p> {byline}</p>
      <p>{abstract}</p>
    </div>
  );
};

export default ArticleDetail;

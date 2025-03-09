import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/articles/Articles";
import ArticleDetail from "./pages/article-detail/ArticleDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

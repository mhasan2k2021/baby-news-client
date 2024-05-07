import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      <h3>this categories has news : {news.length}</h3>
    </div>
  );
};

export default Category;

import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  return (
    <div>
      <h3>this news page.{news.id} </h3>
    </div>
  );
};

export default News;

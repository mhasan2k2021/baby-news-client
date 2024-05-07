import React from "react";
import { useLoaderData } from "react-router-dom";
import NewSummaryCard from "../../shared/NewsSummaryCard/NewSummaryCard";
import News from "../News/News";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <h2>Baby news titles :</h2>
      {allNews?.map((news) => (
        <NewSummaryCard key={news._id} news={news}></NewSummaryCard>
      ))}
      <News></News>
    </div>
  );
};

export default Home;

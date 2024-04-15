import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="UpComing" fetchURL={requests.requestUpcoming} />

      <Row title="Popular" fetchURL={requests.requestPopular} />

      <Row title="Trending" fetchURL={requests.requestTrending} />

      <Row title="Toprated" fetchURL={requests.requestTopRated} />

      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Footer />
    </div>
  );
};

export default Home;

import Banner from "@components/HomePageComponents/banner";
import Slider from "@components/HomePageComponents/slider";
import Layout from "@components/layout";
import React from "react";

const Home = () => {
  return (
    <Layout title="صفحه اصلی">
      <Banner />

      <Slider />
      <Slider />
    </Layout>
  );
};

export default Home;

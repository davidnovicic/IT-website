import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import WhatWeDo from "./WhatWeDo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <Layout>
      <Intro />
      <WhatWeDo />
    </Layout>
  );
}
export default Home;

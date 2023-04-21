/** @format */

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "@/components/index";

import Home from "@/sections/Home";

import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default HomePage;

import React from "react";
import "./main.css";
import "./Schedule";
import Schedule from "./Schedule";
import Trend from "./Trend";
import Blog from "./Blog";

const Main = () => {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
    </main>
  );
};

export default Main;

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import navListData from "./data/NavListData";

function App() {
  // the scroll position of window
  const [scroll, setScroll] = useState(0);
  const [navList, setNavList] = useState(navListData);

  // constantly listen to the scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const setActiveNavItem = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      nav.active = nav.id === id;
      return nav;
    });
    setNavList(newNavList);
  };

  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} setActiveNavItem={setActiveNavItem} />
    </>
  );
}

export default App;

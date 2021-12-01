import React, { useState, useEffect } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { motion } from "framer-motion";
import { gsap, Expo, TimelineLite } from "gsap";

import { Link } from "react-router-dom";
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  let t1;
  useEffect(() => {
    t1 = new TimelineLite({ paused: true });
    t1.restart();

    t1.restart();
    t1.to(".one", 0.8, {
      y: 6,
      rotation: 45,
      ease: Expo.easeInOut,
    });
    t1.to(".two", 0.8, {
      y: -6,
      rotation: -45,
      ease: Expo.easeInOut,
      delay: -0.8,
    });
    t1.to(".menu", 2, {
      top: "0%",
      ease: Expo.easeInOut,
      delay: -0.2,
    });

    t1.staggerFrom(
      ".menu ul li",
      2,
      { x: -200, opacity: 0, duration: 1.5, ease: Expo.easeInOut },
      0.3
    );
    t1.reverse();
  }, [clicked, setClicked]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        zIndex: "5",
        position: "relative",
        backgroundImage:
          "url(https://media.istockphoto.com/photos/studio-photography-black-picture-id1094453686?b=1&k=20&m=1094453686&s=170667a&w=0&h=oYT6Gi5J0cVZRSWjRWyj__IQcsMhxniIMjbPDBJTOHM=)",
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
      }}
    >
      <h5
        className="header-top"
        initial={{ opacity: 0.1, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stifness: 180,
          duration: "1",
        }}
      >
        Hi, my name is
      </h5>
      <motion.h1
        className="header"
        initial={{ opacity: 0.1, y: "-100%" }}
        animate={{ opacity: 1, y: 0, x: -100 }}
        transition={{
          type: "spring",
          stifness: 180,
          duration: "3",
        }}
      >
        {" "}
        Nancy Zaky
      </motion.h1>
      <motion.h5
        className="header-bottom"
        initial={{ opacity: "0.1", y: "-200%" }}
        animate={{ opacity: 1, y: "0", x: "-50%" }}
        transition={{
          type: "spring",
          stifness: 180,
          duration: "3",
        }}
      >
        <ImQuotesLeft /> I'm a full stack web developer, I love Exploring other
        technologies and frameworks with the goal of constantly and consistently
        refining my coding skills. I love to build pretty things and I love to
        solve problems and that's why coding has been my true passion.
        <ImQuotesRight />
      </motion.h5>
      <div
        className="toggle-btn"
        onClick={() => {
          t1.reversed(!t1.reversed());
        }}
      >
        <span className="one"></span>
        <span className="two"></span>
      </div>

      <div className="menu">
        <div className="data">
          <ul>
            <motion.li
              className="nav-list"
              onClick={() => {
                t1.reversed(!t1.reversed());
              }}
              whileHover={{ color: "yellow" }}
              style={{ color: "rgb(103, 222, 202)" }}
            >
              CHECK OUT MY
            </motion.li>
            <li
              className="nav-list"
              onClick={() => {
                t1.reversed(!t1.reversed());
              }}
            >
              <Link to="/resume.pdf" className="link">
                Resume
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                t1.reversed(!t1.reversed());
              }}
            >
              <a
                href="https://github.com/nancyzaky"
                target="blank"
                className="link"
              >
                Github
              </a>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                setClicked(!clicked);
                t1.reversed(!t1.reversed());
              }}
            >
              <a
                className="link"
                href="https://linkedin.com/in/nancy-zaky-1401aa95"
                target="blank"
              >
                LinkedIn
              </a>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                t1.reversed(!t1.reversed());
              }}
            >
              <a
                href="https://www.youtube.com/channel/UCcqEx9MydVnNYsfZ7V3RuxA"
                target="blank"
                className="link"
              >
                YouTube
              </a>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                t1.reversed(!t1.reversed());
              }}
            >
              <a
                href="https://www.facebook.com/nancy.zaky.5/"
                target="blank"
                className="link"
              >
                FaceBook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

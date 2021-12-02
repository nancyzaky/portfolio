import React, { useState, useEffect } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { motion } from "framer-motion";
import { gsap, Expo } from "gsap";

import { Link } from "react-router-dom";
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  let t1;
  t1 = gsap.timeline({ paused: true });

  useEffect(() => {
    t1.to(".one", 0.5, {
      y: "6",
      rotation: "45",
      ease: "Expo.easeInOut",
      delay: "-0.8",
    });
    t1.to(".two", 0.5, {
      y: "-6",
      rotation: "-45",
      ease: "Expo.easeInOut",
      delay: "-0.8",
    });
    t1.to(".menu", 0.7, {
      top: "0%",
      ease: "Expo.easeInOut",
      delay: "-0.2",
    });

    t1.staggerFrom(
      ".menu ul li",
      1.5,
      { x: "-200", opacity: "0", ease: "Expo.easeInOut", duration: 1.5 },
      0.3
    );
    t1.reverse();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        zIndex: "999",
        backgroundImage:
          "url(https://media.istockphoto.com/photos/studio-photography-black-picture-id1094453686?b=1&k=20&m=1094453686&s=170667a&w=0&h=oYT6Gi5J0cVZRSWjRWyj__IQcsMhxniIMjbPDBJTOHM=)",
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
      }}
    >
      <h3
        style={{
          color: "rgb(103, 222, 202)",
          letterSpacing: "4px",
          paddingTop: "1rem",
          paddingLeft: "4.3rem",
          width: "100%",
          top: "90%",
          position: "absolute",
        }}
      >
        Projects I've built
      </h3>

      <div
        className="toggle-btn"
        onClick={() => {
          t1.reversed(!t1.reversed());
        }}
      >
        <span className="one"></span>
        <span className="two"></span>
      </div>

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
        Welcome to my portfolio, my name is
      </h5>
      <motion.h2
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
      </motion.h2>

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
        <ImQuotesLeft /> I'm a full stack web developer, my main focus has been
        exploring new technologies and frameworks with the goal of constantly
        refining my coding skills. I love to create pretty things and to solve
        problems and that's why coding is my true passion.
        <ImQuotesRight />
      </motion.h5>

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
                // t1.reversed(!t1.reversed());
                setClicked(!clicked);
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
      <motion.button
        className="btn"
        whileHover={{ scale: 1.08, color: "pink" }}
      >
        <a
          href="mailto:nancyzaky29@gmail.com"
          style={{
            textDecoration: "none",
            letterSpacing: "3px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Email Me
        </a>
      </motion.button>
    </div>
  );
};

export default Nav;

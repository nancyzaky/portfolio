import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
const Home = () => {
  return (
    <>
      <div
        style={{
          width: "5%",
          height: "100px",
          color: "white",
          display: "grid",
          position: "fixed",
          top: "28%",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "20rem",
            top: "1%",
            backgroundColor: "pink",
            marginLeft: "1.6rem",
          }}
        ></div>
        <ul
          style={{
            width: "10%",
            height: "100%",
            display: "grid",
            // top: "50%",
            padding: "15px",
          }}
        >
          <li
            style={{
              width: "100%",
              color: " rgb(103, 222, 202)",
              fontSize: "25px",
            }}
          >
            <a
              href="https://github.com/nancyzaky"
              target="blank"
              style={{ color: "yellow" }}
            >
              <FaGithub />
            </a>
          </li>
          <li style={{ width: "100%", fontSize: "25px", color: "pink" }}>
            <a
              href="https://www.linkedin.com/in/nancy-zaky-1401aa95/"
              target="blank"
              style={{ color: "rgb(103, 222, 202)" }}
            >
              <FaLinkedin />
            </a>
          </li>
          <li style={{ width: "100%", fontSize: "25px" }}>
            <a
              style={{ color: "pink" }}
              href="https://www.youtube.com/channel/UCcqEx9MydVnNYsfZ7V3RuxA"
              target="blank"
            >
              <ImYoutube />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;

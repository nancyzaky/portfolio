import React from "react";
import { motion, useAnimation } from "framer-motion";
import ReactPlayer from "react-player";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Forth from "./Forth";
const ProjectT = () => {
  return (
    <div className="third-cont">
      <div
        className="line"
        style={{
          marginTop: "8rem",
          // marginBottom: "7rem",
          width: "90%",
          backgroundColor: "grey",
        }}
      ></div>
      <motion.h3
        style={{
          marginLeft: "4%",
          marginRight: "4%",
          letterSpacing: "3px",
          color: "yellow",
          textAlign: "center",
        }}
      >
        3.Dressify{" "}
      </motion.h3>
      <motion.section className="second-left" style={{ width: "100%" }}>
        <ReactPlayer
          muted="true"
          playing="true"
          controls="true"
          url="https://www.youtube.com/watch?v=CycL0dEcMjY&t=62s"
          width="100%"
          height="100%"
        />
      </motion.section>

      <ul
        style={{
          height: "80%",
          display: "grid",
          width: "10%",
          fontSize: "15px",
          // marginLeft: "8rem",
          letterSpacing: "1.5px",
          marginTop: "2rem",
        }}
      >
        {" "}
        <li>
          <h5
            style={{
              color: "rgb(103, 222, 202)",
              letterSpacing: "4px",
              // paddingRight: "2rem",
            }}
          >
            Technologies and Tools:
          </h5>
        </li>
        <li className="tech-list">React</li>
        <li className="tech-list">Ruby</li>
        <li className="tech-list">Sinatra DSL</li>
        <li className="tech-list">Active Record </li>
        <li className="tech-list">CSS</li>
        <li>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <li
              style={{
                display: "flex",
                paddingRight: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "15px" }}> Website Link</h3>
              <a
                href="https://github.com/nancyzaky/fashion-store-app"
                target="blank"
              >
                <GoLink
                  style={{
                    fontSize: "30px",
                    padding: "20px",
                    color: "rgb(103, 222, 202)",
                  }}
                />
              </a>
            </li>
            <li
              style={{
                display: "flex",
                paddingRight: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "15px" }}>Github Repo</h3>

              <a
                href="https://github.com/nancyzaky/fashion-store-app"
                target="blank"
              >
                <FaGithub
                  style={{
                    fontSize: "30px",
                    padding: "20px",
                    color: "rgb(103, 222, 202)",
                  }}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <section
        style={{
          height: "30vh",
          marginTop: "3rem",
          width: "90%",
        }}
      >
        <div
          style={{
            width: "60%",
            textAlign: "center",
            paddingRight: "2rem",
            paddingLeft: "2rem",
            fontSize: "20px",
            fontWeight: "light",
            letterSpacing: "3px",
            color: "white",
            boxShadow: "0px 10px 18px #717273",
            padding: "20px",
            position: "absolute",
            marginRight: "3rem",
          }}
        >
          Dressify app was my first experience developing a full stack web app,
          working for the first time with databases, creating my backend logic,
          APIs, and Servers. Not only I have learned alot about Backend
          development by building Dressify, but also I improved my
          JavaScript/React skills immensely.<br></br> Dressify features a
          modern, easy to navigate shopping app. Make an outfit by the drag and
          drop feature, make a wish list, shop, filter categories and more.
        </div>
      </section>
    </div>
  );
};

export default ProjectT;

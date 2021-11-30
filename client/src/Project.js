import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { motion, useAnimation } from "framer-motion";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import ProjectS from "./ProjectS";
import ProjectT from "./ProjectT";
import Forth from "./Forth";
const Project = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    hidden: { opacity: 0.1, x: "-100%" },
    visible: {
      opacity: 1,
      scale: 1.01,
      x: 0,
      transition: { duration: 1, x: { type: "spring", stiffness: 80 } },
    },
  };
  useEffect(() => {
    if (inView) {
      console.log("true");
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="project-cont">
        <h3
          style={{
            color: "rgb(103, 222, 202)",
            letterSpacing: "4px",
            paddingTop: "1rem",
            paddingLeft: "4rem",
          }}
        >
          Projects I've built
        </h3>
        <div className="line"></div>
        <div className="details-cont">
          <section className="left-container">
            <ReactPlayer
              muted="true"
              playing="true"
              controls="true"
              url="https://www.youtube.com/watch?v=pNOUZm1g4YQ"
              width="100%"
            />
            <h5 style={{ color: "rgb(103, 222, 202)", letterSpacing: "4px" }}>
              Technologies I used:
            </h5>

            <ul
              style={{
                height: "20%",
                display: "flex",
                width: "100%",
                fontSize: "15px",
                marginLeft: "-3rem",
                letterSpacing: "1.5px",
                marginTop: "-0.5rem",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <li className="tech-list">React</li>
              <li className="tech-list">Ruby</li>
              <li className="tech-list">REST API with Rails </li>
              <li className="tech-list">Postgres </li>
              <li className="tech-list">CSS</li>
              <li className="tech-list">Google Maps API</li>
              <li className="tech-list">Stripe API</li>
              <li className="tech-list">Heroku</li>
            </ul>
          </section>
          {/* <div
            style={{ height: "30rem", width: "1px", backgroundColor: "grey" }}
          ></div> */}
          <motion.section
            className="right-cont"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
          >
            <h3
              style={{
                marginLeft: "4%",
                marginRight: "4%",
                letterSpacing: "3px",
                color: "rgb(103, 222, 202)",
              }}
            >
              1.Furniture App{" "}
            </h3>
            <div
              className="line"
              style={{ marginLeft: "4%", marginRight: "4%" }}
            ></div>
            <p
              style={{
                width: "90%",
                textAlign: "center",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                fontSize: "20px",
                fontWeight: "light",
                letterSpacing: "3px",
              }}
            >
              A web app with a responsive web design for shopping. View Top
              selling items, detailed information/pictures about each item,
              create and save a favorite/wish list of products from different
              categories, filter products based on price range, shop the look
              and more.
            </p>
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
                  paddingRight: "4rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontSize: "15px" }}> Website Link</h3>
                <a
                  href="https://blooming-ocean-32379.herokuapp.com/"
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
                  paddingRight: "4rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontSize: "15px" }}>Github Repo</h3>

                <a
                  href="https://github.com/nancyzaky/furniture-app"
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
          </motion.section>
        </div>
        <div
          className="line"
          style={{
            marginTop: "7rem",
            marginBottom: "7rem",
            width: "90%",
            backgroundColor: "grey",
          }}
        ></div>
        <ProjectS />

        <ProjectT />
        <Forth />
      </div>
    </>
  );
};

export default Project;

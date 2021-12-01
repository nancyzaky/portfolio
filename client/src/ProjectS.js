import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ProjectS = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [iconRef, iconInView] = useInView();
  const variants = {
    hidden: { opacity: 0.1, x: "100%" },
    visible: {
      opacity: 1,
      scale: 1.01,
      x: 0,
      transition: {
        duration: 1,
        x: { type: "spring", stiffness: 80, damping: 5 },
      },
    },
  };
  const iconVariantFirst = {
    hidden: { opacity: 0.1, y: "-100%" },
    visible: {
      opacity: 1,
      scale: 1.01,
      y: 0,
      transition: {
        type: "bounce",
        stifness: 280,
        duration: "2",
      },
    },
  };
  const iconVariantSecond = {
    hidden: { opacity: 0.1, y: "100%" },
    visible: {
      opacity: 1,
      scale: 1.01,
      y: 0,
      transition: {
        type: "bounce",
        stifness: 280,
        duration: "2",
      },
    },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (iconInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, iconInView]);

  return (
    <div className="second-cont">
      <section className="second-right">
        <h3
          style={{
            marginLeft: "4%",
            marginRight: "4%",
            letterSpacing: "3px",
            color: "rgb(103, 222, 202)",
          }}
        >
          2.Travel-App{" "}
        </h3>
        <div
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
          Hotel chain web app featuring:
          <li
            style={{
              fontSize: "20px",
              fontWeight: "light",
              letterSpacing: "3px",
              paddingBottom: "2rem",
            }}
          >
            User Authentication and Validation.
          </li>
          <li
            style={{
              fontSize: "20px",
              fontWeight: "light",
              letterSpacing: "3px",
              paddingBottom: "2rem",
            }}
          >
            Manage, Book, cancel and check rooms availability.
          </li>
          <li
            style={{
              fontSize: "20px",
              fontWeight: "light",
              letterSpacing: "3px",
              paddingBottom: "2rem",
            }}
          >
            Check near by attractions, add planned to activities to activities
            calendar.
          </li>
          <li
            style={{
              fontSize: "20px",
              fontWeight: "light",
              letterSpacing: "3px",
              paddingBottom: "2rem",
            }}
          >
            View detailed information/pictures about the hotel, rooms, location,
            travel restrictions. -Check weather predictions.
          </li>
          <li
            style={{
              fontSize: "20px",
              fontWeight: "light",
              letterSpacing: "3px",
              paddingBottom: "2rem",
            }}
          >
            {" "}
            Filter hotels by destination.
          </li>
        </div>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "auto",
            border: "0.2rem solid red",
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
            <motion.li
              ref={iconRef}
              animate={controls}
              initial="hidden"
              variants={iconVariantSecond}
            >
              <a
                href="https://calm-journey-60827.herokuapp.com/"
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
            </motion.li>
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

            <a href="https://github.com/nancyzaky/Travel-app" target="blank">
              <motion.li
                ref={iconRef}
                animate={controls}
                initial="hidden"
                variants={iconVariantFirst}
              >
                <FaGithub
                  style={{
                    fontSize: "30px",
                    padding: "20px",
                    color: "rgb(103, 222, 202)",
                  }}
                />
              </motion.li>
            </a>
          </li>
        </ul>
      </section>
      <motion.section
        className="second-left"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <ReactPlayer
          muted="true"
          playing="true"
          controls="true"
          url="https://www.youtube.com/watch?v=vB2tO5_xuRI&t"
          width="100%"
          height="100%"
        />
      </motion.section>
      <ul className="tech-cont-flex">
        <h5
          style={{
            color: "rgb(103, 222, 202)",
            letterSpacing: "4px",
            paddingRight: "2rem",
          }}
        >
          Technologies I used:
        </h5>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          JavaScript
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          React
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          Ruby
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          REST API with Rails
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          Postgres
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          CSS
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          Weather | Google maps APIs
        </li>
        <li className="tech-list" style={{ paddingBottom: "0" }}>
          Heroku
        </li>
      </ul>
    </div>
  );
};

export default ProjectS;

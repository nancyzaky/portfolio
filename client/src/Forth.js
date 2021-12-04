import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Forth = () => {
  const controls = useAnimation();
  const contControls = useAnimation();
  const [ref, inView] = useInView();
  const [contRef, inContView] = useInView();
  const [contRightRef, inRightContView] = useInView();
  const variants = {
    hidden: { opacity: 0.1, y: "100%" },
    visible: {
      opacity: 1,
      scale: 1.01,
      ease: "easeOut",
      y: 0,
      transition: {
        duration: 2,
        x: { type: "bounce", stiffness: 80 },
      },
    },
  };
  const contVariants = {
    hidden: { opacity: 0.1, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "bounce",
        stifness: 280,
        duration: "2",
      },
    },
  };
  const contRightVariants = {
    hidden: { opacity: 0.1, y: "-30%" },
    visible: {
      opacity: 1,
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
    if (inContView) {
      console.log("true");
      contControls.start("visible");
    } else {
      contControls.start("hidden");
    }
  }, [contControls, inContView]);
  return (
    <>
      <div className="forth-cont">
        {" "}
        <motion.div
          className="column"
          ref={contRef}
          variants={contVariants}
          initial="hidden"
          animate={contControls}
        >
          <h3
            style={{
              color: "rgb(103, 222, 202)",
              letterSpacing: "4px",
              textAlign: "center",
              height: "2rem",
              top: "0",
            }}
          >
            4.GLOW UP
          </h3>
          <section
            style={{
              width: "100%",
              height: "50%",
            }}
          >
            <ReactPlayer
              muted={true}
              playing={true}
              controls={true}
              url={`https://www.youtube.com/watch?v=VEqInyXUWCg&t=76s&origin=http://localhost:4000`}
              width="100%"
              height="100%"
            />
          </section>
          <section className="makeup-bottom">
            <motion.div
              style={{
                width: "auto",
                maxWidth: "80vh",
                height: "100%",
                color: "white",
                letterSpacing: "3px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {" "}
              GLOW UP was my first project using React, I designed and developed
              it for school and study purposes.<br></br> Shop different makeup
              brands, view products details, shades and prices.
              <h5
                style={{
                  color: "rgb(103, 222, 202)",
                  letterSpacing: "4px",
                  paddingRight: "2rem",
                  paddingBottom: "1.5rem",
                }}
              >
                Tools/Technologies:
              </h5>
              <ul
                className="tech-cont-flex"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <li className="tech-list">JavaScript/React</li>
                <li className="tech-list">CSS</li>
                <li className="tech-list">JSON Server</li>
              </ul>
              <motion.li
                style={{
                  fontSize: "30px",
                  padding: "20px",
                  color: "rgb(103, 222, 202)",
                  listStyle: "none",
                }}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
              >
                {" "}
                <a href="https://github.com/nancyzaky/Make-up-project">
                  {" "}
                  <FaGithub />
                </a>
              </motion.li>
            </motion.div>
          </section>
        </motion.div>
        <motion.div
          className="column"
          ref={contRightRef}
          variants={contRightVariants}
          animate={contControls}
          initial="hidden"
        >
          <h3
            style={{
              color: "rgb(103, 222, 202)",
              letterSpacing: "4px",
              textAlign: "center",
            }}
          >
            5.RECIPES ON DEMAND
          </h3>

          <section
            style={{
              width: "100%",
              height: "50%",
            }}
          >
            <ReactPlayer
              muted={true}
              playing={true}
              controls={true}
              url={`https://www.youtube.com/watch?v=va0AYjBYYh0&origin=http://localhost:4000`}
              width="100%"
              height="100%"
            />
          </section>
          <section className="makeup-bottom">
            <motion.div
              style={{
                width: "auto",
                maxWidth: "80vh",
                height: "100%",
                color: "white",
                letterSpacing: "3px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Recipes on Demand is a single page web app for generating random
              food recipes. Save and find recipes based on ingredients, filter
              search the recipes by entering the ingredients keywords.
              <h5
                style={{
                  color: "rgb(103, 222, 202)",
                  letterSpacing: "4px",
                  paddingRight: "2rem",
                  paddingBottom: "1.5rem",
                }}
              >
                Tools/Technologies:
              </h5>
              <ul
                className="tech-cont-flex"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <li className="tech-list">JavaScript</li>
                <li className="tech-list">HTML</li>
                <li className="tech-list">CSS</li>
                <li className="tech-list">JSON Server</li>
              </ul>
              <motion.li
                style={{
                  fontSize: "30px",
                  padding: "20px",
                  color: "rgb(103, 222, 202)",
                  listStyle: "none",
                }}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
              >
                <a href="https://github.com/nancyzaky/phase-1-project">
                  <FaGithub />
                </a>
              </motion.li>
            </motion.div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default Forth;

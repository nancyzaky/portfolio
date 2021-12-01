import React from "react";
import ReactPlayer from "react-player";
import { motion, useAnimation } from "framer-motion";

const Forth = () => {
  return (
    <>
      <div className="forth-cont">
        {" "}
        <div class="column">
          <h3
            style={{
              color: "rgb(103, 222, 202)",
              letterSpacing: "4px",
              textAlign: "center",
              height: "2rem",
              top: "0",
            }}
          >
            4.RECIPES ON DEMAND
          </h3>

          <section className="makeup-bottom">
            {/* <p>
              Recipes on Demand is a platform that lets customers discover new
              recipes, generate random recipes, or even find recipes that
              matches ingredients search filters.
            </p> */}
          </section>
        </div>
        <div class="column">
          <h3
            style={{
              color: "rgb(103, 222, 202)",
              letterSpacing: "4px",
              textAlign: "center",
            }}
          >
            5.GLOW UP
          </h3>

          <motion.section
            style={{
              width: "100%",
              height: "50%",
            }}
          >
            <ReactPlayer
              muted="true"
              playing="true"
              controls="true"
              url="https://www.youtube.com/watch?v=VEqInyXUWCg&t=75s"
              width="100%"
              height="100%"
            />
          </motion.section>
          <section className="makeup-bottom">
            <p></p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Forth;

import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats, Text } from "@react-three/drei";
import { Suspense } from "react";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10%",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Risque cursive",
      }}
    >
      <h1 style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>Nancy Zaky</h1>
    </div>
  );
};

export default Home;

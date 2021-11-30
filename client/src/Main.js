import React, { useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stats, Text } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import { Suspense } from "react";

import Model from "./Char";

const Main = () => {
  return (
    <>
      <Canvas camera={{ fov: 80 }}>
        <OrbitControls />
        <directionalLight intensity={1} position={(10, 10, 5)} />
        <directionalLight intensity={1.5} position={(0, 10, 0)} />
        <spotLight intensity={1} position={[1000, 0, 0]}></spotLight>

        <ambientLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Main;

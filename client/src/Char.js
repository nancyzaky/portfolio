import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  useEffect(() => {
    actions.dance.play();
  });
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/dance.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0.07, -3, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.04}
      >
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Ch34.geometry}
          material={materials["phong1.001"]}
          skeleton={nodes.Ch34.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/dance.glb");

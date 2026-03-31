"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RoboScene() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <>
      <mesh ref={ref}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial 
          color="#ff0000"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </>
  );
}
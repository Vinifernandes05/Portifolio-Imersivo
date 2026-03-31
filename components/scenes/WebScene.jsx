"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function WebScene() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[4, 2.5, 20, 20]} />
      <meshPhysicalMaterial
        color="#0ea5e9"
        transparent
        opacity={0.35}
        roughness={0}
        transmission={0.8}
        thickness={1}
        side={2}
      />
    </mesh>
  );
}
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function SceneBackground() {
  return (
    <Canvas style={{ position: "fixed", zIndex: -1 }}>
      <ambientLight />
      <Stars />
    </Canvas>
  );
}
"use client";

import { Points, PointMaterial } from "@react-three/drei";

export default function SistemaScene() {
  return (
    <Points limit={2000}>
      <PointMaterial 
        size={0.03}
        color="#0ea5e9"
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
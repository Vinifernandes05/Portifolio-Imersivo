"use client";

export default function WebScene() {
  return (
    <mesh>
      <planeGeometry args={[4, 2.5]} />
      <meshPhysicalMaterial
        color="#0ea5e9"
        transparent
        opacity={0.3}
        roughness={0}
        transmission={1}
        thickness={1}
      />
    </mesh>
  );
}
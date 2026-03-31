"use client";

import { Canvas } from "@react-three/fiber";
import SistemaScene from "../../../components/scenes/SistemaScene";
import Navbar from "../../../components/Navbar";

export default function SistemaPage() {
  return (
    <>
      <Navbar />

      <div className="scene-page">
        <Canvas>
          <SistemaScene />
        </Canvas>

        <div className="overlay">
          <h1>Sistema Backend</h1>
          <p>Arquitetura escalável e moderna</p>
        </div>
      </div>
    </>
  );
}
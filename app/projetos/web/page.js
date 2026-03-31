"use client";

import { Canvas } from "@react-three/fiber";
import WebScene from "../../../components/scenes/WebScene";
import Navbar from "../../../components/Navbar";

export default function WebPage() {
  return (
    <>
      <Navbar />

      <div className="scene-page">
        <Canvas>
          <WebScene />
        </Canvas>

        <div className="overlay">
          <h1>Web Experience</h1>
          <p>Interfaces modernas e interativas</p>
        </div>
      </div>
    </>
  );
}
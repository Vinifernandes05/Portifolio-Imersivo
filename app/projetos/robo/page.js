"use client";

import Navbar from "../../../components/Navbar";
import SceneWrapper from "../../../components/SceneWrapper";
import RoboScene from "../../../components/scenes/RoboScene";

export default function RoboPage() {
  return (
    <>
      <Navbar />

      <div className="scene-page">
        <SceneWrapper>
          <RoboScene />
        </SceneWrapper>

        <div className="overlay">
          <h1>Robô de Sumô</h1>
          <p>Sistema embarcado inteligente</p>
        </div>
      </div>
    </>
  );
}
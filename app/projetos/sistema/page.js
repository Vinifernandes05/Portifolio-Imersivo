"use client";

import SceneWrapper from "../../../components/SceneWrapper";
import SistemaScene from "../../../components/scenes/SistemaScene";
import Navbar from "../../../components/Navbar";

export default function SistemaPage() {
  return (
    <>
      <Navbar />
      <div className="scene-page">
        <SceneWrapper>
          <SistemaScene />
        </SceneWrapper>
        <div className="overlay">
          <h1>Sistema Backend</h1>
          <p>Arquitetura escalável e moderna</p>
        </div>
      </div>
    </>
  );
}
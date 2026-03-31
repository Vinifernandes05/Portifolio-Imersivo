"use client";

import SceneWrapper from "../../../components/SceneWrapper";
import WebScene from "../../../components/scenes/WebScene";
import Navbar from "../../../components/Navbar";

export default function WebPage() {
  return (
    <>
      <Navbar />
      <div className="scene-page">
        <SceneWrapper>
          <WebScene />
        </SceneWrapper>
        <div className="overlay">
          <h1>Web Experience</h1>
          <p>Interfaces modernas e interativas</p>
        </div>
      </div>
    </>
  );
}
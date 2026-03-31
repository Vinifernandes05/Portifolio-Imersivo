"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SceneBackground from "../components/SceneBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".title", {
      y: 100,
      opacity: 0,
      duration: 1.5
    });

    gsap.utils.toArray("section").forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        scrollTrigger: {
          trigger: section,
          start: "top 85%"
        }
      });
    });

  }, []);

  return (
    <>
      <Navbar />
      <SceneBackground />

      {/* HERO */}
      <section className="hero" id="sobre">
        <div className="hero-content">
          <h1 className="title">Vinicius Fernandes</h1>
          <p className="subtitle">
            Experiências digitais com engenharia e impacto
          </p>
        </div>

        <div className="hero-bg"></div>
      </section>

      {/* STORY */}
      <section className="story">
        <h2>Não é só código.</h2>
        <p>É engenharia aplicada.</p>
      </section>

      <section className="story dark">
        <h2>Do hardware ao software</h2>
        <p>Soluções completas e inteligentes.</p>
      </section>

      {/* PROJETOS */}
      <section className="projects">
        <div className="project">Sistema Backend</div>
        <div className="project">Robô de Sumô</div>
        <div className="project">Web Experience</div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Tecnologias</h2>
        <div className="tech">JavaScript</div>
        <div className="tech">Node.js</div>
        <div className="tech">Python</div>
      </section>

      {/* CONTATO */}
      <section className="contact">
        <h2>Vamos construir algo incrível?</h2>
      </section>

      <footer className="footer">
        © 2026 Vinicius Fernandes
      </footer>
    </>
  );
}
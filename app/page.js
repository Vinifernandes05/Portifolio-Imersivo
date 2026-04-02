"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SceneBackground from "../components/SceneBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-image", {
      scale: 0.5,
      opacity: 0,
      duration: 1.2
    });

    gsap.from(".title", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      delay: 0.3
    });

    gsap.from(".subtitle", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.6
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
        <div className="hero-container">

          <div className="hero-image">
            <Image
              src="/images/perfil.jpeg"
              alt="Vinicius Sousa Fernandes"
              width={180}
              height={180}
            />
          </div>

          <div className="hero-text">
            <h1 className="title">Vinicius Sousa Fernandes</h1>

            <p className="subtitle">
              Experiências digitais com engenharia e impacto
            </p>
          </div>

        </div>
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
        <h2 className="skills-title">Tecnologias</h2>

        <div className="tech-list">
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Java</span>
          <span>C++</span>
          <span>SQL (Oracle)</span>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact">
        <h2 className="contact-title">Vamos construir algo incrível?</h2>

        <div className="contact-container">

          <a href="mailto:vinifernandes2005@gmail.com" className="contact-card">
            📧
            <span>Email</span>
            <p>vinifernandes2005@gmail.com</p>
          </a>

          <a href="https://github.com/Vinifernandes05" target="_blank" className="contact-card">
            💻
            <span>GitHub</span>
            <p>Vinifernandes05</p>
          </a>

          <a href="https://www.linkedin.com/in/viniciussousaf" target="_blank" className="contact-card">
            🔗
            <span>LinkedIn</span>
            <p>viniciussousaf</p>
          </a>

        </div>
      </section>

      <footer className="footer">
        © 2026 Vinicius Fernandes
      </footer>
    </>
  );
}
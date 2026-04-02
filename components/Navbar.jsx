"use client";

import Link from "next/link";
import { useState } from "react";

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    background: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },

  link: {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    position: "relative",
    transition: "0.3s",
  },

  hoverEffect: {
    color: "#0ea5e9",
    transform: "scale(1.1)",
  },

  dropdown: {
    position: "relative",
  },

  dropdownMenu: {
    position: "absolute",
    top: "30px",
    left: 0,
    background: "rgba(0,0,0,0.9)",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "120px",
  },
};

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>

        {/* HOME */}
        <Link
          href="/"
          style={{
            ...styles.link,
            ...(hovered === "home" ? styles.hoverEffect : {}),
          }}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </Link>

        {/* PROJETOS (DROPDOWN) */}
        <div
          style={styles.dropdown}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span
            style={{
              ...styles.link,
              ...(hovered === "projetos" ? styles.hoverEffect : {}),
              cursor: "pointer",
            }}
            onMouseEnter={() => setHovered("projetos")}
            onMouseLeave={() => setHovered(null)}
          >
            Projetos
          </span>

          {open && (
            <div style={styles.dropdownMenu}>
              <Link href="/projetos/robo" style={styles.link}>
                Robô
              </Link>
              <Link href="/projetos/sistema" style={styles.link}>
                Sistema
              </Link>
            </div>
          )}
        </div>

        {/* CURSOS */}
        <Link
          href="/cursos"
          style={{
            ...styles.link,
            ...(hovered === "cursos" ? styles.hoverEffect : {}),
          }}
          onMouseEnter={() => setHovered("cursos")}
          onMouseLeave={() => setHovered(null)}
        >
          Cursos
        </Link>

        {/* CONTATO */}
     
<a
  href="#contato"
  style={{
    ...styles.link,
    ...(hovered === "contato" ? styles.hoverEffect : {}),
  }}
  onMouseEnter={() => setHovered("contato")}
  onMouseLeave={() => setHovered(null)}
>
  Contato
</a>

      </nav>
    </header>
  );
}
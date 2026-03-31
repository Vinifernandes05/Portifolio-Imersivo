"use client";

import Link from "next/link";

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
    transition: "color 0.2s",
  },
};

export default function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/projetos/robo" style={styles.link}>Robô</Link>
        <Link href="/projetos/sistema" style={styles.link}>Sistema</Link>
        <Link href="/projetos/web" style={styles.link}>Web</Link>
      </nav>
    </header>
  );
}
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projetos/robo">Robô</Link>
        <Link href="/projetos/sistema">Sistema</Link>
        <Link href="/projetos/web">Web</Link>
      </nav>
    </header>
  );
}
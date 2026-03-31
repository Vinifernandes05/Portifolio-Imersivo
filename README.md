# 🚀 Portfólio 3D Interativo

Portfólio moderno desenvolvido com foco em **experiência do usuário**, **visual 3D imersivo** e **arquitetura profissional** utilizando tecnologias atuais do ecossistema web.

---

## ✨ Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de apresentar projetos de forma **interativa e diferenciada**, indo além de páginas estáticas tradicionais.

A proposta é criar uma **experiência visual fluida**, onde o usuário navega por ambientes 3D, com profundidade, animações e transições suaves.

---

## 🧠 Conceito

- Interface minimalista (preto, branco e azul)
- Navegação intuitiva
- Experiência imersiva com elementos 3D
- Separação de cada projeto como uma experiência individual

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** → Estrutura principal da aplicação  
- **React** → Componentização  
- **Three.js** → Renderização 3D  
- **@react-three/fiber** → Integração do Three.js com React  
- **@react-three/drei** → Helpers para cenas 3D  
- **GSAP (ScrollTrigger)** → Animações avançadas  
- **CSS3** → Estilização global  

---

## 📁 Estrutura do Projeto

```bash
app/
 ├── layout.js           # Layout global (HTML base)
 ├── page.js             # Página principal (Home)

 ├── projetos/
 │    ├── robo/
 │    │    └── page.js   # Página do projeto Robô
 │    ├── sistema/
 │    │    └── page.js   # Página do sistema backend
 │    ├── web/
 │         └── page.js   # Página da experiência web

components/
 ├── Navbar.jsx          # Barra de navegação
 ├── SceneBackground.jsx # Fundo 3D global
 ├── SceneWrapper.jsx    # Wrapper de cena 3D

 ├── scenes/
 │    ├── RoboScene.jsx
 │    ├── SistemaScene.jsx
 │    ├── WebScene.jsx

public/
 ├── textures/           # Texturas usadas nos objetos 3D
 ├── images/             # Imagens gerais

styles/
 ├── globals.css         # Estilos globais

package.json
next.config.js
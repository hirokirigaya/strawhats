import { createRef, useEffect, useRef } from 'react';
import './Parallax.css';

function Parallax() {
  
  useEffect(() => {
    const crocodile = document.getElementById("crocodile")
    const luffy = document.getElementById("luffy")
    const particles = document.getElementById("particles")
    const btn = document.getElementById("btn")
    window.addEventListener('scroll', () => {
          let value = window.scrollY;
          crocodile.style.right = value * 0.5 + 'px';
          crocodile.style.bottom = value * 0.05 + 'px';
          luffy.style.left = value * 0.5 + 'px';
          particles.style.left = value * 0.5 + 'px';
          btn.style.right = value * 1 + 'px';
      });
  }, []);


  return (
    <section className="parallax">
      <img src="../img/Crocodile.png" alt="crocodile" id="crocodile"/>
      <img src="../img/Luffy.png" alt="luffy" id="luffy"/>
      <img src="../img/Particles.png" alt="particle" id="particles"/>
      <a href="#explore" id="btn">
        Explore
      </a>
    </section>
  );
}

export default Parallax;

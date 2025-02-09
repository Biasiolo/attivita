// Importa jQuery
import $ from 'jquery';
import 'bootstrap';
import '../scss/main.scss';


import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a primeira seção e a overlay
    const section1 = document.getElementById('section1');
    const overlay = section1.querySelector('.fade-overlay');
  
    // Guarda a altura da primeira seção
    const section1Height = section1.offsetHeight;
  
    // Escuta o evento de scroll
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
  
      // Calcula o progresso (0 = topo da seção1, 1 = final da seção1)
      let progress = scrollTop / section1Height;
  
      // Limita o valor para ficar no intervalo [0, 1]
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
  
      // Ajusta a opacidade da overlay (vai de 0 a 1)
      overlay.style.opacity = progress;
    });
  });
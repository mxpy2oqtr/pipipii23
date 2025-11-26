// Cargar la API de YouTube
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  player = new YT.Player('demo-video-player', {
    events: {
      onReady: onPlayerReady,
    },
  });
}

// eslint-disable-next-line no-unused-vars
function onPlayerReady(_event) {
  // El reproductor está listo
}

// Función para reproducir el video
function playVideo() {
  if (player && typeof player.playVideo === 'function') {
    player.playVideo();
  }
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });

      // Si es el enlace de demo, reproducir el video después del scroll
      if (targetId === '#demo') {
        setTimeout(playVideo, 1000);
      }
    }
  });
});

// Efecto de cambio de color en el header al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    header.style.backdropFilter = 'blur(20px)';
  }
});

// Efecto de aparición suave en scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar a las tarjetas
document
  .querySelectorAll('.download-card, .feature-container')
  .forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

// Funcionalidad para las preguntas frecuentes
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});

// Reproducir video al hacer clic en el overlay
document.querySelector('.video-overlay').addEventListener('click', function () {
  playVideo();
  this.style.display = 'none';
});

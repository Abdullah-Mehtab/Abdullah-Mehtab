document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsParticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#888888"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false,
        animation: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#888888",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}); 
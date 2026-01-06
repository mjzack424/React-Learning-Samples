export const lifeSpan = {
  fullScreen: {
    enable: false, // این خط را اضافه کنید
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
    //   value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
    value: "#ffffffbe",
    
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
      random: true,
    },
    links: {
      enable: true,
      distance: 125,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      outModes: {
        default: "out",
      },
    },
    life: {
      duration: {
        value: 3,
      },
      delay: {
        value: 1,
        random: true,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
};

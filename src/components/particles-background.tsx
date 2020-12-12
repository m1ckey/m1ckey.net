import React from 'react';

import Particles, { ISourceOptions } from 'react-tsparticles';

const ParticlesBackground = () => {
  console.log(particleOptions);
  return (
    <Particles
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
      }}
      options={particleOptions}
    />
  );
};

const particleOptions: ISourceOptions = {
  fpsLimit: 60,
  particles: {
    color: {
      value: '#fff',
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 3,
    },
    number: {
      density: {
        enable: true,
      },
      value: 20,
    },
    opacity: {
      value: 1,
    },
    move: {
      enable: true,
      speed: 3,
      outModes: 'bounce',
      attract: {
        enable: true,
        rotate: {
          x: 64,
          y: 1024,
        },
      },
    },
    links: {
      color: {
        value: '#fff',
      },
      enable: true,
      opacity: 1,
      width: 0.1,
      distance: 200,
    },
    collisions: {
      enable: true,
      mode: 'bounce',
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: ['grab', 'attract'],
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      attract: {
        duration: 1,
      },
    },
  },
};

export default ParticlesBackground;

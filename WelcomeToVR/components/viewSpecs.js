export const neuronSpecs = {
  Paper: { name: 'Paper', x: -2, y: 0, z: -50 },
  People: { x: -22, y: -5, z: -50 },
  Experiments: { x: 13, y: 6, z: -50 },
  'Crowd Sourcing': { x: 8, y: -9, z: -50 },
  'VR Technologies': { x: -27, y: 10, z: -50 },
  Abstract: { x: -7, y: 8, z: -50 },
  'Proteus Effect': { x: 8, y: 12, z: -50 },
  'Drawing Power of Crowds': { x: 24, y: 7, z: -50 },
  'Restorative Effects of Virtual Environments': { x: 18, y: -2, z: -50 }
};

// connections between neurons
export const axonSpecs = [
  ['Paper', 'People'],
  ['Paper', 'Abstract'],
  ['Paper', 'Experiments'],
  ['Paper', 'Crowd Sourcing'],
  ['Paper', 'VR Technologies'],
  ['Experiments', 'Proteus Effect'],
  ['Experiments', 'Drawing Power of Crowds'],
  ['Experiments', 'Restorative Effects of Virtual Environments']
];

export const authors = {
  1: { name: 'Xiao Ma', img: '/authors/xiao.png' },
  2: { name: 'Megan Cackett', img: '/authors/megan.png' },
  3: { name: 'Leslie Park', img: '/authors/leslie.png' },
  4: { name: 'Eric Chien', img: '/authors/eric.png' },
  5: { name: 'Mor Naaman', img: '/authors/mor.png' }
};

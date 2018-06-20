export const neuronSpecs = {
  Paper: { name: 'Paper', x: -2, y: 0, z: -50 },
  People: { x: -22, y: -3, z: -50 },
  Software: { x: -9, y: -9, z: -50 },
  Studies: { x: 13, y: 6, z: -50 },
  'Crowdsourcing': { x: 8, y: -9, z: -50 },
  'VR Technologies': { x: -27, y: 10, z: -50 },
  Abstract: { x: -6, y: 8, z: -50 },
  'Proteus Effect': { x: 8, y: 12, z: -50 },
  'Drawing Power of Crowds': { x: 24, y: 7, z: -50 },
  'Restorative Effects of Virtual Environments': { x: 18, y: -2, z: -50 }
};

// connections between neurons
export const axonSpecs = [
  ['Paper', 'People'],
  ['Paper', 'Abstract'],
  ['Paper', 'Software'],
  ['Paper', 'Studies'],
  ['Paper', 'Crowdsourcing'],
  ['Paper', 'VR Technologies'],
  ['Studies', 'Proteus Effect'],
  ['Studies', 'Drawing Power of Crowds'],
  ['Studies', 'Restorative Effects of Virtual Environments']
];

export const authors = {
  1: { name: 'Xiao Ma', img: '/authors/xiao.png', link: 'http://maxiao.info/' },
  2: {
    name: 'Megan Cackett',
    img: '/authors/megan.png',
    link: 'http://www.megancackett.com/'
  },
  3: {
    name: 'Leslie Park',
    img: '/authors/leslie.png',
    link: 'https://lesliepark.github.io/'
  },
  4: {
    name: 'Eric Chien',
    img: '/authors/eric.png',
    link: 'https://linkedin.com/in/eric-jc-chien/'
  },
  5: {
    name: 'Mor Naaman',
    img: '/authors/mor.png',
    link: 'https://people.jacobs.cornell.edu/mor/'
  }
};

export const vrTech = {
  1: {
    category: 'Room-Scale VR',
    device: 'HTC Vive',
    img: '/vr-tech/htc-vive.jpg'
  },
  2: {
    category: 'Mobile VR\n(Used in This Paper)',
    device: 'Samsung Gear VR',
    img: '/vr-tech/gear-vr.jpg'
  },
  3: {
    category: 'Stand-Alone VR',
    device: 'Oculus Go',
    img: '/vr-tech/oculus-go.jpg'
  }
};

export const studies = {
  'Study 1': {
    name: 'Restorative Effects of Virtual Environments',
    intro:
      'This study is centered around the ability of VR to deliver place illusion, i.e., the illusion of, "being in a place in spite of the sure knowledge that you are not there".'
  },
  'Study 2': {
    name: 'Proteus Effect',
    intro:
      'In this study, we examine the embodiment illusion via a study of the Proteus effect, which refers to the phenomenon that, "individual’s behavior conforms to their digital self-representation independent of how others perceive them".'
  },
  'Study 3': {
    name: 'Drawing Power of Crowds',
    intro:
      'In the final study, we investigate the plausibility illusion, the "illusion that what is apparently happening is really happening (even though you know for sure that it is not)".'
  }
};

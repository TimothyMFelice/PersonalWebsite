module.exports = {
  siteTitle: 'Timothy M. Felice | Software Engineer',
  siteDescription:
    'Software engineer based in Los Angeles, CA specializing in developing high-quality games and applications.',
  siteKeywords:
    'Timothy M. Felice, Timothy Felice, Tim Felice, Timothy, Tim, Felice, TimFelice, TimothyMFelice, software engineer, game developer, vr developer, virtual reality developer, full sail university',
  siteUrl: 'https://tfelice.info',
  siteLanguage: 'en_US',

  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Timothy M. Felice',
  location: 'Los Angeles, CA',
  email: 'TimothyMFelice@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/TimothyMFelice/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/timothy-felice/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@TimmyFelice',
  //googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};

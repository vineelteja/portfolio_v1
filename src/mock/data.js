import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Personal Portfolio',
  lang: 'en',
  description: 'Hello Everyone, I am a Full stack developer.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vineel Teja',
  subtitle: 'I am a Full Stack Developer, ready to bring your idea as a website.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'vin_profile.jpg',
  paragraphOne: `I'm a full stack engineer experienced in web technologies with knowledge of Software Development, Python, NodeJS, VueJS, React, Redux, MongoDB, MySQL, PostgreSQL, ElasticSearch, CSS3, SCSS, Data Analysis, React.js and Docker.`,
  paragraphTwo: `I love working in microservices architecture. I love building great products that help people be more productive and make the world a better place. I'm always on the lookout for opportunities to learn new things and grow my career to the point where it will never feel like work.`,
  paragraphThree: `I'm also passionate about iOS application development and Machine Learning and Deep Learning. I love to spend my free time in travel and photography.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_1.jpg',
    title: 'Adoption Center',
    info: `It's easy to find a dog or cat who's right for you at a shelter or rescue group. Simply enter your zip code above to start your search`,
    info2: '',
    url: 'https://kind-colden-0fae76.netlify.app/',
    repo: 'https://github.com/vineelteja/wc_project2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_2.jpg',
    title: 'Online Restaurant Menu',
    info: `While every restaurant is busy in providing good food to the customers, we are here to help you bring online presence to your restaurant.`,
    info2: `It is very easy to sign up on the website, upload photos and just add your menu items of the restaurant.`,
    url: '',
    repo: 'https://github.com/vineelteja/wc_project2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.jpg',
    title: 'New Type Social Networking',
    info: 'A new social networking app allows you to talk to people around you while you are anonymous. Express your feelings wihtout fear and  express your emotions with Joy',
    info2: '',
    url: '',
    repo: 'https://github.com/vineelteja/project_2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

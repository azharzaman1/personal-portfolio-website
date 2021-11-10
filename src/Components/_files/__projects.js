import { assets } from "../RecentWork/assets/assets";

export const projects = [
  {
    order: 1,
    title: "Covid-19 Tracker",
    logo: assets.TrackerLogo,
    logoAlt: "Tracker Logo",
    logoHeight: "50px",
    translateY: "12px",
    github: "https://github.com/azharzaman1/covid-tracker",
    src: "https://azhar-covidtracker.ga/",
    desc: "Built a fully functional COVID-19 Tracker with React using latest web  technologies like Material UI, React leaflet, ChartJs as main UI components. This specific Covid tracker finds its realtime database from 'disease.sh' using Live API calls. Also it uses Firebase as a database and Authentication functionalities.",
    tech1: "reactjs",
    tech2: "react-chartjs",
    tech3: "firebase",
    dataAOS: "fade-up",
    dataAosDelay: 500,
  },
  {
    order: 2,
    title: "Fully-featured Amazon clone (V1)",
    logo: assets.AmazonLogo,
    logoAlt: "Amazon Logo",
    github: "https://github.com/azharzaman1/covid-tracker",
    src: "https://azhar-amazonclone.ga/",
    desc: "I have recently completed Amazon Demo Clone build with React, with full eCommerce functionalities like add & remove to Cart, add address, Checkout Payment via Stripe, add products, add categories and much more. This Amazon clone is using Firebase firestore as realtime Database to store user details, addresses, order stats etc.",
    tech1: "reactjs",
    tech2: "redux",
    tech3: "firebase",
    dataAOS: "fade-up",
    dataAosDelay: 500,
  },
  {
    order: 3,
    title: "Personal Portfolio Site",
    logo: assets.MyLogo,
    logoAlt: "Azhar Logo",
    logoHeight: "37px",
    translateY: "08px",
    github: "https://github.com/azharzaman1/fullstack-amazon-clone",
    src: "https://azharzaman.com",
    desc: "This website is built with React with its descent UI. I have used CSS(SASS) for styling purposes. Making this website simple but expressive was my first priority. And I guess it meets all the requirements of elegant design website. There is always room for improvement. Your contribution would be a great favour.",
    tech1: "reactjs",
    tech2: "material-ui",
    tech3: "aos",
    dataAOS: "fade-up",
    dataAosDelay: 500,
  },
  {
    order: 4,
    title: "Basic Netflix Clone",
    logo: assets.NetflixLogo,
    logoAlt: "Netflix Logo",
    logoHeight: "35px",
    translateY: "3.5px",
    github: "https://github.com/azharzaman1/netflix-portfolio-clone",
    src: "https://azhar-netflixclone.netlify.app",
    desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and more on thousands of internet-connected devices. I decided to build it with react and used tmdb as realtime movie database. It fetch movies from tmdb and trailers when clicked from youtube with a special 'youtube-trailer' functionality.",
    tech1: "reactjs",
    tech2: "tmdb-api",
    tech3: "yt-trailers",
    dataAOS: "fade-up",
  },
  {
    order: 5,
    title: "Basic Airbnb Clone (V1)",
    logo: assets.AirbnbLogo,
    logoAlt: "Airbnb Logo",
    github: "https://github.com/azharzaman1/airbnb-portfolio-project",
    src: "https://azhar-airbnb-clone.netlify.app/",
    desc: "As Airbnb has got a nice UI, and awesome features. I decided have build a Airbnb clone utilizing some of the trending web technologies these days like NextJs, Tailwind CSS and something really cool Server side rendering by NextJs. It is a nice little application with awesome ui and basic feautres of World famous Airbnb.",
    tech1: "nextjs",
    tech2: "ssr",
    tech3: "mapbox",
    dataAOS: "fade-up",
  },
  {
    order: 6,
    title: "Basic Google Clone",
    logo: assets.GoogleLogo,
    logoAlt: "Google Logo",
    logoHeight: "35px",
    github: "https://github.com/azharzaman1/Google-portfolio-clone.git",
    src: "https://azhar-googleclone.netlify.app",
    desc: "Built a fully functional Google Clone with React finding its real-time database from the original Google server. This clone is full of functinalites including React Router, React Hooks and React Context API. Material UI is serving as a design library. This clone is super responsive fit for every device size.",
    tech1: "reactjs",
    tech2: "material-ui",
    tech3: "firebase",
    dataAOS: "fade-up",
  },
];

/*
  {
    order: 5,
    title: "Code Godown (Under development)",
    logo: assets.CodeGodown,
    logoAlt: "Code Godown Logo",
    logoHeight: "35px", //
    translateY: "3.5px", //
    github: "https://github.com/azharzaman1/coding-godown",
    src: "https://code-godown.netlify.app/",
    desc: "Code Godown is a Code saving, code manuplating, platform. One can store, manange code snippets. One can also share code with friends, and publish articles for their audience. This is going to be all in platform for code lovers. Platform is in development phase, if anyone want to contribute, you are most welcomed.",
    tech1: "nextjs",
    tech2: "mui - antd",
    tech3: "firebase",
    dataAOS: "fade-up",
  },
*/

export const projectsWPDev = [
  {
    order: 6,
    title: "Multi-vendor Marketplace | Peeeko",
    logo: "wp",
    src: "https://peeeko.com",
    wooLogo: true,
    desc: "Peeeko.com is the First Pakistani Online Multi-Vendor Marketplace, specially designed for Females in all aspects. This marketplace forms a One Window Solution to serve all Needs of Females of All Ages. With a 90% Women Employment Policy, this platform gather Vendors, Manufacturers and Importers of various Products.",
    dataAOS: "fade-up",
  },
  {
    order: 7,
    title: "Agency Bussiness Site | PlanNative",
    logo: "wp",
    src: "https://plannative.com",
    wooLogo: false,
    desc: "Plan Native is a Multinational Business Process Outsourcing Company of Professional Accountants, CPAs, HR Specialists, IT Experts, Business Consultants and Growth Strategists, who have been providing One Window Business Solutions and Advisory Services to clients around the globe since many years",
    dataAOS: "fade-up",
  },
];

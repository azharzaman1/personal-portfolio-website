import { assets } from "../RecentWork/assets/assets";

export const projects = [
  {
    order: 1,
    title: "Covid-19 Tracker",
    logo: assets.TrackerLogo,
    logoAlt: "Tracker Logo",
    logoHeight: "50px",
    translateY: "12px",
    src: "https://covidtracker.azharzaman.com/",
    desc: "Built a fully functional COVID-19 Tracker with React using latest web  technologies like Material UI, React leaflet, ChartJs as main UI components. Tracker finds its realtime database from 'disease.sh' using live API calls.",
    tech1: "reactjs",
    tech2: "react-chartjs",
    tech3: "firebase",
    dataAOS: "fade-up",
    dataAosDelay: 500,
    logoClasses: "w-24 -translate-y-1.5",
  },
  {
    order: 2,
    title: "Fully-featured Amazon demo",
    logo: assets.AmazonLogo,
    logoAlt: "Amazon Logo",
    src: "https://amazondemo.azharzaman.com/",
    desc: "I have recently completed Amazon Demo Clone build with React, with full eCommerce functionalities like add & remove to Cart, add address, Checkout Payment via Stripe, add products, add categories and much more.",
    tech1: "reactjs",
    tech2: "redux",
    tech3: "firebase",
    dataAOS: "fade-up",
    dataAosDelay: 500,
    logoClasses: "w-24 -translate-y-1",
  },
  {
    order: 3,
    title: "Personal Portfolio Site",
    logo: assets.MyLogo,
    logoAlt: "Azhar Logo",
    // github: "https://github.com/azharzaman1/personal-portfolio-website",
    src: "https://azharzaman.com",
    desc: "I built my personal portfolio website on ReactJs to showcase my skill-set and recent work. Making this website simple but expressive was my first priority. And I believe it meet all the requirements of an elegant design website.",
    tech1: "reactjs",
    tech2: "material-ui",
    tech3: "aos",
    dataAOS: "fade-up",
    dataAosDelay: 500,
    logoClasses: "w-24 -translate-y-2",
  },
  {
    order: 4,
    title: "Airbnb demo",
    logo: assets.AirbnbLogo,
    logoAlt: "Airbnb Logo",
    src: "https://airbnbdemo.azharzaman.com/",
    desc: "Built Airbnb clone using some of the trending web technologies these days like NextJs, Tailwind CSS and something really cool Server side rendering by NextJs. It is a nice little application with awesome UI and basic feautres of world famous Airbnb.",
    tech1: "nextjs",
    tech2: "ssr",
    tech3: "mapbox",
    dataAOS: "fade-up",
    logoClasses: "w-24 -translate-y-1",
  },
  {
    order: 5,
    title: "Code Godown (development)",
    logo: assets.CodeGodown,
    logoAlt: "Code Godown Logo",
    src: "https://codegodown.azharzaman.com/",
    desc: "Code Godown is a Code saving, code manipulating, Code sharing, Code related articles publishing platform. This is something for code lovers. Platform is in development phase, if anyone want to contribute, you are most welcome.",
    tech1: "nextjs",
    tech2: "mui - tailwind",
    tech3: "firebase",
    dataAOS: "fade-up",
    logoClasses: "w-10 -translate-y-2",
  },
];

// {
//   order: 5,
//   title: "Netflix demo",
//   logo: assets.NetflixLogo,
//   logoAlt: "Netflix Logo",
//   logoHeight: "35px",
//   translateY: "3.5px",
//   src: "https://netflixdemo.azharzaman.com/",
//   desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and more on thousands of internet-connected devices. I decided to build it with react and used tmdb as realtime movie database. It fetch movies from tmdb and trailers when clicked from youtube with a special 'youtube-trailer' functionality.",
//   tech1: "reactjs",
//   tech2: "tmdb-api",
//   tech3: "yt-trailers",
//   dataAOS: "fade-up",
// },

/*
{
  order: 6,
  title: "Basic Google Clone",
  logo: assets.GoogleLogo,
  logoAlt: "Google Logo",
  logoHeight: "35px",
  github: "https://github.com/azharzaman1/google-demo",
  src: "https://googledemo.azharzaman.com/",
  desc: "Built a fully functional Google Clone with React finding its real-time database from the original Google server. This clone is full of functinalites including React Router, React Hooks and React Context API. Material UI is serving as a design library. This clone is super responsive fit for every device size.",
  tech1: "reactjs",
  tech2: "material-ui",
  tech3: "firebase",
  dataAOS: "fade-up",
},
*/

export const projectsWPDev = [
  {
    order: 1,
    title: "Multi-vendor Marketplace | Peeeko",
    logo: "wp",
    // src: "https://peeeko.com",
    wooLogo: true,
    desc: "Built a Multi-vendor Marketplace for Peeeko (Pvt) Ltd. developed sepecifically for females. This marketplace forms a One Window Solution to serve all Needs of Females of all Ages.",
    dataAOS: "fade-up",
  },
  {
    order: 2,
    title: "Agency Bussiness Site | PlanNative",
    logo: "wp",
    src: "https://plannative.com",
    wooLogo: false,
    desc: "Built enterprise level business website for Plan Native, which is Multinational Business Process Outsourcing Company of Professional Accountants, CPAs, HR Specialists, IT Experts.",
    dataAOS: "fade-up",
  },
  {
    order: 3,
    title: "Business Site | BRPakistan",
    logo: "wp",
    // src: "http://brpakistan.com/",
    wooLogo: false,
    desc: "Built next level Business Website for BRPakistan, which is multi service company based in Pakistan. Main services include Business registration, Tax consultation etc.",
    dataAOS: "fade-up",
  },
];

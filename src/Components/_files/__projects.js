import CodeLogo from "./assets/code-logo.svg";
import AirbnbLogo from "./assets/airbnb.svg";
import assets from "./assets/assets";

export const projects = [
  {
    order: 0,
    title: "Code Godown V1",
    logo: CodeLogo,
    logoAlt: "Code Godown Logo",
    src: "https://code-godown.vercel.app/",
    github: "https://github.com/azharzaman1/code-godown",
    desc: "Code Godown is a Code saving, code manipulating, Code sharing, Code related articles publishing platform. This is something for code lovers. Platform is in development phase, if anyone wants to contribute, you are most welcome.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { title: "reactjs", Logo: <assets.ReactLogo className="w-5 h-5" /> },
      {
        title: "nodejs",
        Logo: <assets.NodeLogo className="w-5 h-5" />,
      },
      {
        Logo: assets.ExpressLogo,
        title: "expressjs",
        isImage: true,
      },
      {
        title: "mongodb",
        Logo: <assets.MongoLogo className="w-5 h-5" />,
      },
      {
        title: "nextjs",
        Logo: (
          <div className="bg-white rounded-full h-5 flex justify-center items-center">
            <assets.NextLogo2 className="w-5 h-5" />
          </div>
        ),
      },
      {
        Logo: <assets.ReduxLogo className="w-5 h-5" />,
        title: "redux(toolkit)",
      },
      {
        title: "mui(material-ui)",
        Logo: <assets.MuiLogo className="w-5 h-5" />,
      },
      { title: "tailwind", Logo: <assets.TailwindLogo className="w-5 h-5" /> },
      {
        title: "react-query",
        Logo: <assets.ReactQueryLogo className="w-5 h-5" />,
      },
    ],
    logoClasses: "w-10 -translate-y-2",
  },
  {
    order: 1,
    title: "eCommerce Store Front",
    logo: CodeLogo,
    logoAlt: "eCommerce Store Front",
    src: "https://ecommerce-store-front.vercel.app",
    github: "https://github.com/azharzaman1/ecommerce-store-front",
    desc: "Built an eCommerce store frontend, fetching database from Graphql API. Store is still under development, and there is lot to come.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { title: "reactjs", Logo: <assets.ReactLogo className="w-5 h-5" /> },
      {
        Logo: <assets.ReduxLogo className="w-5 h-5" />,
        title: "redux(toolkit)",
      },
      {
        title: "qraphql",
        Logo: <assets.GraphqlLogo className="w-5 h-5" />,
      },
    ],
    logoClasses: "w-10 -translate-y-2",
  },
  {
    order: 2,
    title: "Covid-19 Tracker",
    logo: "https://i.ibb.co/h7JVqGg/tracker.png",
    logoAlt: "Tracker Logo",
    logoHeight: "50px",
    translateY: "12px",
    src: "https://covidtracker.azharzaman.com/",
    github: "https://github.com/azharzaman1/covid-tracker",
    desc: "Built a fully functional COVID-19 Tracker with React using latest web technologies like React, JavaScript. Tracker finds its realtime database from 'disease.sh' using realtime API calls.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { Logo: <assets.ReactLogo className="w-5 h-5" />, title: "reactjs" },
      {
        Logo: assets.ChartJsLogo,
        title: "react-chartjs",
        isImage: true,
      },
      { Logo: <assets.FirebaseLogo className="w-5 h-5" />, title: "firebase" },
    ],
    logoClasses: "w-24 -translate-y-1.5",
  },
  {
    order: 3,
    title: "Fully-featured Amazon demo",
    logo: "https://i.ibb.co/YkkjL4g/amazon.png",
    logoAlt: "Amazon Logo",
    src: "https://amazondemo.azharzaman.com/",
    github: "https://github.com/azharzaman1/fullstack-amazon-clone",
    desc: "I have recently completed Amazon Demo Clone build with React, with full eCommerce functionalities Cart, Checkout Payment via Stripe, and much more.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { Logo: <assets.ReactLogo className="w-5 h-5" />, title: "reactjs" },
      {
        Logo: <assets.ReduxLogo className="w-5 h-5" />,
        title: "redux(toolkit)",
      },
      { Logo: <assets.FirebaseLogo className="w-5 h-5" />, title: "Firebase" },
      { Logo: <assets.StripeLogo className="w-10" />, title: "stripe-js" },
    ],
    logoClasses: "w-24 -translate-y-1",
  },
  {
    order: 4,
    title: "Library Application (development)",
    logo: CodeLogo,
    logoAlt: "Library application logo",
    src: "https://azhar-libraryapp.vercel.app/",
    github: "https://github.com/azharzaman1/library-application-client",
    desc: "Built library application to practice MERN stack, with secure JWT-authentication, mongodb as database, Expressjs REST apis built on MVC pattern.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { title: "reactjs", Logo: <assets.ReactLogo className="w-5 h-5" /> },
      {
        title: "nodejs",
        Logo: <assets.NodeLogo className="w-5 h-5" />,
      },
      {
        Logo: assets.ExpressLogo,
        title: "expressjs",
        isImage: true,
      },
      {
        title: "mongodb",
        Logo: <assets.MongoLogo className="w-5 h-5" />,
      },
      {
        title: "mui(material-ui)",
        Logo: <assets.MuiLogo className="w-5 h-5" />,
      },
      { title: "tailwind", Logo: <assets.TailwindLogo className="w-5 h-5" /> },
      {
        title: "react-query",
        Logo: <assets.ReactQueryLogo className="w-5 h-5" />,
      },
    ],
    logoClasses: "w-10 -translate-y-2",
  },
  {
    order: 5,
    title: "Netflix demo",
    logo: "https://i.ibb.co/ZJZ9kKx/netflix.png",
    logoAlt: "Netflix Logo",
    src: "https://netflixdemo.azharzaman.com/",
    github: "https://github.com/azharzaman1/netflix-portfolio-clone",
    desc: "Built Netflix listing page, finding movies database from tmdb. Got an idea from yt tutorial(clever programmer), but finished on my own.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { title: "reactjs", Logo: <assets.ReactLogo className="w-5 h-5" /> },
      {
        title: "mui(material-ui)",
        Logo: <assets.MuiLogo className="w-5 h-5" />,
      },
    ],
    logoClasses: "w-24 -translate-y-1",
  },
  {
    order: 6,
    title: "Airbnb demo",
    logo: AirbnbLogo,
    logoAlt: "Airbnb Logo",
    src: "https://airbnbdemo.azharzaman.com/",
    github: "https://github.com/azharzaman1/airbnb-portfolio-project",
    desc: "Built Airbnb clone using NextJs, Tailwind CSS and something really cool Server side rendering by NextJs. It is a nice little application with awesome UI and basic feautres of world famous Airbnb.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { Logo: <assets.ReactLogo className="w-5 h-5" />, title: "reactjs" },
      {
        Logo: (
          <div className="bg-white rounded-full h-5 flex justify-center items-center">
            <assets.NextLogo2 className="w-5 h-5" />
          </div>
        ),
        title: "nextjs",
      },
      { Logo: <assets.TailwindLogo className="w-5 h-5" />, title: "tailwind" },
      { Logo: <assets.MapboxLogo className="w-20" />, title: "mapbox" },
    ],
    logoClasses: "w-24 -translate-y-1",
  },
  {
    order: 7,
    title: "Personal Portfolio Site",
    logo: "https://i.ibb.co/SJPMpGH/azhar.png",
    logoAlt: "Azhar Logo",
    // github: "https://github.com/azharzaman1/personal-portfolio-website",
    // src: "https://azharzaman.com",
    desc: "I built my personal portfolio website on ReactJs to showcase my skill-set and recent work. Making this website simple but expressive was my first priority. And I believe it meet all the requirements of an elegant design website.",
    techsLogos: [
      {
        title: "javascript",
        Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
      },
      { Logo: <assets.ReactLogo className="w-5 h-5" />, title: "reactjs" },
      {
        Logo: <assets.MuiLogo className="w-5 h-5" />,
        title: "mui(material-ui)",
      },
      { Logo: <assets.AOSLogo className="w-8" />, title: "animate on scroll" },
      { Logo: <assets.TailwindLogo className="w-5 h-5" />, title: "tailwind" },
    ],
    logoClasses: "w-24 -translate-y-2",
  },
];

// {
//   order: 8,
//   title: "Single Product eCommerce site (development)",
//   logo: CodeLogo,
//   logoAlt: "Library application logo",
//   src: "https://single-product-ecommerce.vercel.app/",
//   github: "https://github.com/azharzaman1/single-product-site",
//   desc: "Building a simple eCommerce store like website for a friend, for health related product, with all basic eCommerce features like, cart, checkout, coupons, admin dashboard, reviews etc. Website is under production, there is lot to come.",
//   techsLogos: [
//     {
//       title: "javascript",
//       Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
//     },
//     { title: "reactjs", Logo: <assets.ReactLogo className="w-5 h-5" /> },
//     {
//       title: "nextjs",
//       Logo: (
//         <div className="bg-white rounded-full h-5 flex justify-center items-center">
//           <assets.NextLogo2 className="w-5 h-5" />
//         </div>
//       ),
//     },
//     {
//       title: "mui(material-ui)",
//       Logo: <assets.MuiLogo className="w-5 h-5" />,
//     },
//     { title: "tailwind", Logo: <assets.TailwindLogo className="w-5 h-5" /> },
//     {
//       Logo: <assets.ReduxLogo className="w-5 h-5" />,
//       title: "redux(toolkit)",
//     },
//     { Logo: <assets.FirebaseLogo className="w-5 h-5" />, title: "Firebase" },
//   ],
//   logoClasses: "w-10 -translate-y-2",
// },

// {
//   order: 8,
//   title: "Google Demo",
//   logo: 'https://i.ibb.co/RDJS7Yw/google.png',
//   logoAlt: "Google Logo",
//   logoHeight: "35px",
//   github: "https://github.com/azharzaman1/google-demo",
//   src: "https://googledemo.azharzaman.com/",
//   desc: "Built a Google demo with React finding its database from the original Google server. Material UI is serving as a design library.",
//   techsLogos: [
//     {
//       title: "javascript",
//       Logo: <assets.JavaScriptLogo className="w-5 h-5" />,
//     },
//     { title: "reactjs", Logo: <assets.ReactLogo className="w-5 h-5" /> },
//     {
//       title: "mui(material-ui)",
//       Logo: <assets.MuiLogo className="w-5 h-5" />,
//     },
//   ],
//   logoClasses: "w-24 -translate-y-1",
// },

// export const projectsWPDev = [
//   {
//     order: 1,
//     title: "Multi-vendor Marketplace | Peeeko",
//     logo: "wp",
//     // src: "https://peeeko.com",
//     wooLogo: true,
//     desc: "Built a Multi-vendor Marketplace for Peeeko (Pvt) Ltd. developed sepecifically for females. This marketplace forms a One Window Solution to serve all Needs of Females of all Ages.",
//     dataAOS: "fade-up",
//   },
//   {
//     order: 2,
//     title: "Agency Bussiness Site | PlanNative",
//     logo: "wp",
//     src: "https://plannative.com",
//     wooLogo: false,
//     desc: "Built enterprise level business website for Plan Native, which is Multinational Business Process Outsourcing Company of Professional Accountants, CPAs, HR Specialists, IT Experts.",
//     dataAOS: "fade-up",
//   },
//   {
//     order: 3,
//     title: "Business Site | BRPakistan",
//     logo: "wp",
//     // src: "http://brpakistan.com/",
//     wooLogo: false,
//     desc: "Built next level Business Website for BRPakistan, which is multi service company based in Pakistan. Main services include Business registration, Tax consultation etc.",
//     dataAOS: "fade-up",
//   },
// ];

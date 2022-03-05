import assets from "./assets/assets";

export const frontEndExpertise = [
  {
    order: 0,
    title: "JavaScript",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 1,
    title: "ReactJs (Hooks)",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 2,
    title: "NextJs",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 3,
    title: "GatsbyJs",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 4,
    title: "HTML5",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 5,
    title: "CSS3",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 6,
    title: "Google Firebase",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
  },
];

export const mernExpertise = [
  {
    order: 0,
    title: "MongoDB",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 1,
    title: "ExpressJs",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 2,
    title: "ReactJs",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 3,
    title: "NodeJs",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
];

export const toolsAndLibraries = [
  {
    order: 0,
    title: "Redux - Context",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 1,
    title: "Mui (Material UI)",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 2,
    title: "PrimeReact",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 3,
    title: "Tailwind CSS",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 4,
    title: "Bootstrap (React)",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 5,
    title: "SCSS (Sass)",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 6,
    title: "Advance WordPress",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 7,
    title: "WooCommerce",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
  {
    order: 8,
    title: "Elementor Pro",
    logo: assets.ReactLogo,
    dataAOS: "fade-up",
    dataAOS_delay: 500,
  },
];

/*
export const getExpertise = (dynamicDelay) => {
  return [
    {
      order: 1,
      title: "JavaScript (ES6+)",
      progress: 86,
      desc1: "JavaScript is most popular programming language till date",
      desc2:
        "All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc.",
      dataAOS: "fade-up",
      dataAOS_delay: dynamicDelay("500", "500", "500"),
    },
    {
      order: 2,
      title: "ReactJs (Hooks)",
      progress: 90,
      desc1: "React is world famous JavaScript library by Facebook Inc.",
      desc2:
        "React makes it painless to create interactive, component-based and lightening fast UIs.",
      dataAOS: "fade-up",
      dataAOS_delay: dynamicDelay("500", "500", null),
    },
    {
      order: 3,
      title: "NextJs (SSR / SSG / APIs)",
      progress: 84,
      desc1:
        "Next.js is a development framework built on top of Node.js enabling React based web applications functionalities.",
      desc2:
        "Such as server-side rendering(SSR) and generating static websites(SSG).",
      dataAOS: "fade-up",
      dataAOS_delay: dynamicDelay("400", null, null),
    },
    {
      order: 4,
      title: "Redux - Context",
      progress: 86,
      desc1:
        "Redux is an open-source JavaScript library for managing application state.",
      desc2:
        "Redux is a predictable state container designed to help you write JavaScript apps.",
      dataAOS: "fade-up",
      dataAOS_delay: dynamicDelay("500", null, null),
    },
    {
      order: 5,
      title: "GatsbyJs / Basic Graphql",
      progress: 83,
      desc1:
        "Gatsby provides development teams an open source frontend framework for creating dynamic, optimized websites.",
      desc2: "From marketing sites, to eCommerce stores, to documentation.",
      dataAOS: "fade-up",
      dataAOS_delay: dynamicDelay("400", null, null),
    },
    {
      order: 6,
      title: "Mui / PrimeReact",
      progress: 88,
      desc1:
        "Material Design is a design language developed by Google in 2014.",
      desc2:
        "Contains a set of high quality components for building rich, interactive user interfaces",
      dataAOS: "fade-up",
      dataAOS_delay: dynamicDelay("400", null, null),
    },
    {
      order: 7,
      title: "HTML5 / CSS3(Sass)",
      progress: 95,
      desc1:
        "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
      desc2: "Cascading Style Sheets(CSS) styles the document.",
      dataAOS: "fade-up",
    },
    {
      order: 8,
      title: "Tailwind CSS / Bootstrap",
      progress: 87,
      desc1:
        "Tailwind CSS is a utility-first CSS framework composed to build any design, directly in your markup.",
      desc2: "React Bootstrap is utility Components library for react.",
      dataAOS: "fade-up",
    },
    {
      order: 9,
      title: "Google Firebase / APIs etc.",
      progress: 85,
      desc1:
        "Firebase is a platform developed by Google for creating mobile and web applications.",
      desc2: "Have descent experience consuming popular APIs, like MapBox etc.",
      dataAOS: "fade-up",
    },
  ];
};

const dynamicDelay = (d, t, m) => {
  if (!isTablet && !isMobile) {
    if (d) {
      return d;
    } else {
      return "300";
    }
  } else if (isTablet && !isMobile) {
    if (t) {
      return t;
    } else {
      return "300";
    }
  } else {
    if (m) {
      return m;
    } else {
      return "300";
    }
  }
};


*/

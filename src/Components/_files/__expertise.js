const getExpertise = (dynamicDelay) => {
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

export default getExpertise;

export const wpDevExpertise = [
  {
    order: 0,
    title: "Advance WordPress",
    progress: 95,
    desc1:
      "WordPress is a free, worlds most famous and open-source content management system, for creating next genration scalable sites.",
    dataAOS: "fade-up",
  },
  {
    title: "WooCommerce",
    progress: 95,
    desc1:
      "WooCommerce is an open-source e-commerce plugin for WordPress. It is designed for small to large-sized online merchants using WordPress.",
    dataAOS: "fade-up",
  },
  {
    title: "Elementor Pro",
    progress: 94,
    desc1:
      "Elementor is the most advanced website builder for WordPress, allowing you to visually design pages, posts, slides and much more.",
    dataAOS: "fade-up",
  },
  // {
  //   title: "Dokan Pro",
  //   progress: 95,
  //   desc1:
  //     "Dokan is the best front end multi-vendor marketplaces solution on WordPress, to create marketplaces like Amazon, eBay, flipkart",
  //   dataAOS: "fade-up",
  // },
  // {
  //   title: "Revolution Slider Pro",
  //   progress: 85,
  //   desc1:
  //     "Slider Revolution is all-in-one slider solution, helping beginner-and mid-level designers WOW their clients with pro-level visuals.",
  //   dataAOS: "fade-up",
  // },
  // {
  //   title: "Custom WP Coding",
  //   progress: 85,
  //   desc1:
  //     "Interegrating custom CSS, HTML5, JavaScript to WordPress, to make sites more inter-active, functional and user-friendly",
  //   dataAOS: "fade-up",
  // },
];

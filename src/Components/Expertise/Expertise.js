import {
  Card,
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { Heading2, MuiDivider, SectionHeading } from "../../Mui/MuiComponents";
import ExpertProgress from "./ProgressBar";
import "./Expertise.css";

const useStyles = makeStyles((theme) => ({
  expertiseSection: {
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7rem",
    },
  },

  root: {
    padding: "0 150px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 125px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px",
    },
  },

  expertise: {
    padding: "0 1rem 1rem 1rem",
  },
}));

const Expertise = () => {
  const c = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

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

  return (
    <div className={`expertiseSection ${c.expertiseSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="02">
          Skillset and expertise
        </SectionHeading>
        <Grid container spacing={2} className="expertiseContent__container">
          <ExpertiseItem
            title="JavaScript (ES6 - ES7)"
            progress={83}
            data-aos="fade-up"
            data-aos-delay={dynamicDelay("500", "500", "500")}
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="ReactJs"
            progress={90}
            data-aos="fade-up"
            data-aos-delay={dynamicDelay("500", "500", null)}
            desc1="Reacts is world famous JavaScript library by Facebook Inc."
            desc2="React makes it painless to create interactive, component-based and lightening fast UIs."
          />
          <ExpertiseItem
            title="Redux - Context"
            progress={80}
            data-aos="fade-up"
            data-aos-delay={dynamicDelay("500", null, null)}
            desc1="Redux is an open-source JavaScript library for managing application state."
            desc2="Redux is a predictable state container designed to help you write JavaScript apps."
          />

          <ExpertiseItem
            title="GatsbyJs"
            progress={80}
            data-aos="fade-up"
            data-aos-delay={dynamicDelay("400", null, null)}
            desc1="Gatsby provides development teams an open source frontend framework for creating dynamic, optimized websites."
            desc2="From marketing sites, to eCommerce stores, to documentation."
          />
          <ExpertiseItem
            title="Material UI"
            progress={96}
            data-aos="fade-up"
            data-aos-delay={dynamicDelay("400", null, null)}
            desc1="Material Design is a design language developed by Google in 2014."
            desc2="Material UI let you build attractive and interactive components based on Material design of Google. "
          />
          <ExpertiseItem
            title="Semantic UI - React Toolbox"
            progress={90}
            data-aos="fade-up"
            data-aos-delay={dynamicDelay("400", null, null)}
            desc1="Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML."
            desc2="React Toolbox is a set of React material design-based components."
          />

          <ExpertiseItem
            title="HTML5"
            progress={98}
            data-aos="fade-up"
            desc1="HTML5 is a markup language used for structuring and presenting content on the World Wide Web."
            desc2="It is the fifth and last major HTML version that is a World Wide Web."
          />
          <ExpertiseItem
            title="CSS(SASS)"
            progress={94}
            data-aos="fade-up"
            desc1="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
            desc2="SASS is a CSS with super-powers"
          />
          <ExpertiseItem
            title="Firebase"
            progress={92}
            data-aos="fade-up"
            desc1="Firebase is a platform developed by Google for creating mobile and web applications."
            desc2="Firebase helps you build and run successful apps, webapps etc."
          />
        </Grid>

        <MuiDivider marginTop="38px" marginBottom="29px" width="50%" />

        <Grid container spacing={2} className="expertiseContent__container">
          <ExpertiseItem
            title="Advance WordPress"
            progress={95}
            data-aos="fade-up"
            desc1="WordPress is a free, worlds most famous and open-source content management system, for creating next genration scalable sites."
          />
          <ExpertiseItem
            title="WooCommerce"
            progress={95}
            data-aos="fade-up"
            desc1="WooCommerce is an open-source e-commerce plugin for WordPress. It is designed for small to large-sized online merchants using WordPress."
          />
          <ExpertiseItem
            title="Dokan Pro"
            progress={98}
            data-aos="fade-up"
            desc1="Dokan is the best front end multi-vendor marketplaces solution on WordPress, to create marketplaces like Amazon, eBay, flipkart"
          />
          <ExpertiseItem
            title="Elementor Pro"
            progress={94}
            data-aos="fade-up"
            desc1="Elementor is the most advanced website builder for WordPress, allowing you to visually design pages, posts, slides and much more."
          />
          <ExpertiseItem
            title="Revolution Slider Pro"
            progress={85}
            data-aos="fade-up"
            desc1="Slider Revolution is all-in-one slider solution, helping beginner-and mid-level designers WOW their clients with pro-level visuals."
          />
          <ExpertiseItem
            title="Custom WordPress Coding"
            progress={90}
            data-aos="fade-up"
            desc1="Interegrating custom CSS, HTML5, JavaScript to WordPress, to make sites more inter-active, functional and user-friendly"
          />
        </Grid>
      </Container>
    </div>
  );
};

const ExpertiseItem = ({ title, progress, desc1, desc2, ...rest }) => {
  const c = useStyles();
  const [showProgress, setShowProgress] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4} {...rest}>
      <Card
        className={`expertyCard ${c.expertise}`}
        elevation={1}
        onMouseEnter={() => {
          setInterval(() => {
            setShowProgress(true);
          }, 250);
        }}
      >
        <Heading2>{title}</Heading2>
        <div className="progressBar__wrapper">
          {showProgress && (
            <>{progress && <ExpertProgress progress={progress} />}</>
          )}
        </div>
        <ul>
          {desc1 && <li>{desc1}</li>}
          {desc2 && <li>{desc2}</li>}
        </ul>
      </Card>
    </Grid>
  );
};

export default Expertise;

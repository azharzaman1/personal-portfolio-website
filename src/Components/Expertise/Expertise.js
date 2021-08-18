import { Card, Container, Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { SectionHeading } from "../../Mui/MuiComponents";
import "./Expertise.css";

// `

const useStyles = makeStyles((theme) => ({
  expertiseSection: {
    marginTop: "12rem",
    marginBottom: "12rem",
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

  divider: {
    marginTop: "10px",
    backgroundColor: "rgba(255,255,255,0.25)",
    width: "50%",
    margin: "0 auto",
    marginTop: "38px",
    marginBottom: "29px",
  },
}));

const Expertise = () => {
  const c = useStyles();

  return (
    <div className={`expertiseSection ${c.expertiseSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="02">
          Skillset and expertise
        </SectionHeading>
        <Grid container spacing={2} className="expertiseContent__container">
          <ExpertiseItem
            title="JavaScript (ES6 - ES7)"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="ReactJs"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="Redux - Context"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />

          <ExpertiseItem
            title="GatsbyJs"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="Material UI"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="Semantic UI - React Toolbox"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />

          <ExpertiseItem
            title="HTML5"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="CSS(SASS)"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="Firebase"
            desc1="JavaScript is most popular programming language till date"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
        </Grid>
        <Divider className={c.divider} />

        <Grid container spacing={2} className="expertiseContent__container">
          <ExpertiseItem
            title="Advance WordPress"
            desc1="Worlds most popular website powering platform"
            desc2="More than 70% of running websites are built on WordPress"
          />
          <ExpertiseItem
            title="WooCommerce"
            desc1="The All alone eCommerce solution"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="Dokan Pro"
            desc1="All in one Multi-vendor eCommerce marketplace solution"
            desc2="All the famous companies use JavaScript as a tool."
          />
          <ExpertiseItem
            title="Elementor Pro"
            desc1="Worlds most Popular Page Builder and UI designer"
            desc2="All the famous companies use JavaScript as a tool."
          />
          <ExpertiseItem
            title="Revelution Slider Pro"
            desc1="Worlds most powerful Sliders solution"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
          <ExpertiseItem
            title="Custom WordPress Coding"
            desc1="Worlds most powerful Sliders solution"
            desc2="All the famous companies use JavaScript as a tool including Google, Amazon, PayPal, etc."
          />
        </Grid>
      </Container>
    </div>
  );
};

const ExpertiseItem = ({ title, desc1, desc2 }) => {
  const c = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={`expertyCard ${c.expertise}`} elevation={1}>
        <h4>{title}</h4>
        <ul>
          <li>{desc1}</li>
          <li>{desc2}</li>
        </ul>
      </Card>
    </Grid>
  );
};

export default Expertise;

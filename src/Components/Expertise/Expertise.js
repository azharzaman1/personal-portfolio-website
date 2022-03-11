import { Card, Container, Grid, makeStyles } from "@material-ui/core";
import { Heading2, Heading3, SectionHeading } from "../../Mui/MuiComponents";
import {
  frontEndExpertise,
  mernExpertise,
  toolsAndLibraries,
} from "../_files/__expertise";
import "./Expertise.css";

const useStyles = makeStyles((theme) => ({
  expertiseSection: {
    marginTop: "7rem",
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
    minHeight: 225,
  },
  expertiseGroup: {
    margin: "2rem 0 0rem",
  },
}));

const Expertise = () => {
  const c = useStyles();

  return (
    <div className={`expertiseSection ${c.expertiseSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="02">
          Tech stack and expertise
        </SectionHeading>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={c.expertiseGroup}
        >
          <Grid item>
            <Heading3>MERN</Heading3>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            justifyContent="center"
            className="expertiseContent__container"
          >
            {mernExpertise.map((item) => (
              <ExpertiseItem
                key={item.key}
                item={item}
                data-aos="fade-up"
                data-aos-delay={350}
              />
            ))}
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={c.expertiseGroup}
        >
          <Grid item>
            <Heading3>Front End</Heading3>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            justifyContent="center"
            className="expertiseContent__container"
          >
            {frontEndExpertise.map((item) => (
              <ExpertiseItem
                key={item.key}
                item={item}
                data-aos="fade-up"
                data-aos-delay={350}
              />
            ))}
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={c.expertiseGroup}
        >
          <Grid item>
            <Heading3>Tools and Libraries</Heading3>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            justifyContent="center"
            className="expertiseContent__container"
          >
            {toolsAndLibraries.map((item) => (
              <ExpertiseItem
                key={item.key}
                item={item}
                data-aos="fade-up"
                data-aos-delay={350}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const ExpertiseItem = ({ item, ...rest }) => {
  const c = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} {...rest}>
      <Card className={`expertyCard ${c.expertise}`} elevation={1}>
        <Heading2>{item.title}</Heading2>
        <ul>
          {item.descriptions.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </Card>
    </Grid>
  );
};

export default Expertise;

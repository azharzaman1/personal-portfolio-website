import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { SectionHeading } from "../../Mui/MuiComponents";

const useStyles = makeStyles((theme) => ({
  portfolioSection: {
    marginTop: "5rem",
    marginBottom: "7rem",
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
}));

const RecentWork = () => {
  const c = useStyles();

  return (
    <div className={`portfolioSection ${c.portfolioSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="03">
          What I have built!
        </SectionHeading>
      </Container>
    </div>
  );
};

export default RecentWork;

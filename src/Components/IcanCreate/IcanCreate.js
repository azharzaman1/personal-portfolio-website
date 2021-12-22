import React from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Heading2, MuiButton, SectionHeading } from "../../Mui/MuiComponents";
import ImageComparison from "./ImageComparison";
import { Link } from "react-scroll";
import { assets } from "./assets/assets";
import "./IcanCreate.css";

// `

const useStyles = makeStyles((theme) => ({
  iCC__Section: {
    marginTop: "4rem",
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

  iCC__Card: {
    borderRadius: 5,
  },
}));

const IcanCreate = () => {
  const c = useStyles();

  return (
    <div className={`iCanCreateSection ${c.iCC__Section}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2">What I can build for you!</SectionHeading>
        <Grid container spacing={4} className="iCC__contentContainer">
          <ICanCreateCard
            title="JavaScript(React) based Web Application"
            imgUrl1={assets.CVA}
            imgUrl2={assets.CovidTracker}
            feature1="Elegant design"
            feature2="Interactive user interface"
            feature3="Advance animations"
            feature4="Unlimited Public APIs"
            feature5="Clean bug free code"
            feature6="Healthy team collaboration"
          />

          <ICanCreateCard
            title="A Multi-vendor Marketplace like Amazon | eBay"
            imgUrl1={assets.Amazon}
            imgUrl2={assets.eBay}
            feature1="Complete vendors setup"
            feature2="Commissions setup"
            feature3="Complete shipping setup"
            feature4="Complete payments setup"
            feature5="Unlimited sellers"
            feature6="Unlimited products"
          />

          <ICanCreateCard
            title="A fully-functional eCommerce store like Macys"
            imgUrl1={assets.Macys}
            imgUrl2={assets.BestBuy}
            feature1="Complete shipping setup"
            feature2="Complete payments setup"
            feature3="Complete products setup"
            feature4="Fully-functional store"
            feature5="Unlimited products"
            feature6="Next-level descent design"
          />

          <ICanCreateCard
            title="An elegant business or agency website "
            imgUrl1={assets.Traackr}
            imgUrl2={assets.PlanNative}
            feature1="Elegant design"
            feature2="Interactive user interface"
            feature3="Advance animations"
            feature4="Leads generating ui"
            feature5="SEO optimized"
            feature6="All needed pages"
          />

          <ICanCreateCard
            title="A Blog site for Blogging or Affiliate marketing"
            imgUrl1={assets.beingGuru}
            imgUrl2={assets.DicasOnline}
            feature1="SEO Optimized"
            feature2="Eye-catching design"
            feature3="Full blog functionalities"
            feature4="Google AdSense friendly"
            feature5="Unlimited posts"
            feature6="Unlimited Authors"
          />

          <ICanCreateCard
            title="A personal | company portfolio website"
            imgUrl1={assets.Azhar}
            imgUrl2={assets.CompanyPortfolio}
            feature1="Elegant design"
            feature2="Interactive user interface"
            feature3="Advance animations"
            feature4="All must have sections"
            feature5="Unlimited Projects listing"
            feature6=""
          />
        </Grid>
      </Container>
    </div>
  );
};

const ICanCreateCard = ({
  title,
  imgUrl1,
  imgUrl2,
  imgAlt1,
  imgAlt2,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  duration,
}) => {
  const c = useStyles();

  return (
    <Grid item xs={12} sm={6} data-aos="fade-up">
      <Card elevation={2} className={`iCC__Card ${c.iCC__Card}`}>
        <ImageComparison
          imgUrl1={imgUrl1}
          imgUrl2={imgUrl2}
          imgAlt1={imgAlt1}
          imgAlt2={imgAlt2}
        />
        <CardContent className={c.iCC__CContent}>
          <Heading2 className="iCC__cHeading">{title}</Heading2>

          <ul className="iCC__cFeatures">
            <Grid container direction="row">
              <Grid item container direction="column" xs={6}>
                <Grid item>{feature1 && <li>{feature1}</li>}</Grid>
                <Grid item>{feature2 && <li>{feature2}</li>}</Grid>
                <Grid item>{feature3 && <li>{feature3}</li>}</Grid>
              </Grid>
              <Grid item container direction="column" xs={6}>
                <Grid item>{feature4 && <li>{feature4}</li>}</Grid>
                <Grid item>{feature5 && <li>{feature5}</li>}</Grid>
                <Grid item>{feature6 && <li>{feature6}</li>}</Grid>
              </Grid>
            </Grid>
          </ul>
          <Link
            to="getintouch-section-scroll-anchor"
            duration={duration ? duration : 1750}
            smooth={true}
          >
            <MuiButton size="small" variant="contained">
              Book now
            </MuiButton>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default IcanCreate;

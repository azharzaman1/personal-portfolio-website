import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import { Heading2, MuiButton, SectionHeading } from "../../Mui/MuiComponents";
import ImageComparison from "./ImageComparison";
import { Link } from "react-scroll";
import { ICanCreate } from "../_files/__iCanCreate";
import "./IcanCreate.css";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";

// `

const useStyles = makeStyles((theme) => ({
  iCC__Card: {
    borderRadius: 5,
  },
}));

const IcanCreate = () => {
  const c = useStyles();

  return (
    <SectionLayout className={`iCanCreateSection`}>
      <LayoutContainer maxWidth="lg">
        <SectionHeading type="2">What I can build for you!</SectionHeading>
        <Grid container spacing={4} className="iCC__contentContainer">
          {ICanCreate.map((item, i) => (
            <ICanCreateCard
              key={i}
              title={item.title}
              imgUrl1={item.imgUrl1}
              imgUrl2={item.imgUrl2}
              feature1={item.feature1}
              feature2={item.feature2}
              feature3={item.feature3}
              feature4={item.feature4}
              feature5={item.feature5}
              feature6={item.feature6}
            />
          ))}
        </Grid>
      </LayoutContainer>
    </SectionLayout>
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
                <Grid item>{feature6 && <li>{feature6} ...</li>}</Grid>
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

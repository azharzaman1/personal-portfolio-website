import { Card, CardContent, Grid } from "@material-ui/core";
import ImageComparison from "./ImageComparison";
import { Link } from "react-scroll";
import { ICanCreate } from "../_files/__iCanCreate";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";
import { Heading2, MuiButton, SectionHeading } from "../Generic/Theme";

const IcanCreate = () => {
  return (
    <SectionLayout className={`iCanCreateSection`}>
      <LayoutContainer maxWidth="lg">
        <div className="mb-6">
          <SectionHeading type="2">What I can build for you!</SectionHeading>
        </div>

        <Grid container spacing={4} className="mt-3">
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
  return (
    <Grid item xs={12} sm={6} data-aos="fade-up">
      <Card elevation={2} className="rounded-md">
        <ImageComparison
          imgUrl1={imgUrl1}
          imgUrl2={imgUrl2}
          imgAlt1={imgAlt1}
          imgAlt2={imgAlt2}
        />
        <CardContent>
          <Heading2 className="m-0">{title}</Heading2>
          <div className="mt-4">
            <Link
              to="getintouch-section-scroll-anchor"
              smooth={true}
              duration={duration ? duration : 500}
            >
              <MuiButton size="small" variant="contained">
                Book now
              </MuiButton>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default IcanCreate;

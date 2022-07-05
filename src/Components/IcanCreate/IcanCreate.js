import { Card, CardContent, Grid } from "@material-ui/core";
import ImageComparison from "./ImageComparison";
import { Link } from "react-scroll";
import { ICanCreate } from "../_files/__iCanCreate";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";
import Button from "../Generic/Theme/Button";
import Heading from "../Generic/Theme/Heading";

const IcanCreate = () => {
  return (
    <SectionLayout className={`iCanCreateSection`}>
      <LayoutContainer maxWidth="lg">
        <Heading type="section">What I can build for you!</Heading>

        <Grid container spacing={4} className="!mt-4">
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
          <Heading type="secondary" className="font-medium">
            {title}
          </Heading>
          <div className="mt-4">
            <Link
              to="getintouch-section-scroll-anchor"
              smooth={true}
              duration={duration ? duration : 500}
            >
              <Button
                type="text"
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-chevron-right h-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                }
              >
                book now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default IcanCreate;

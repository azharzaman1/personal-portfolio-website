import { Grid } from "@material-ui/core";
import { ICanCreate } from "../_files/__iCanCreate";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";
import Heading from "../Generic/Theme/Heading";
import ICanCreateCard from "./ICanCreateCard";

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

export default IcanCreate;

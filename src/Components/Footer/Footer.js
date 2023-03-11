import { Grid } from "@material-ui/core";
import { GitHub, Language, LinkedIn, Twitter } from "@material-ui/icons";
import Chip from "../Generic/Theme/Chip";

const Footer = () => {
  return (
    <div className={`footerSection mt-48 p-4`}>
      <Grid container direction="column" alignItems="center">
        <Grid item container justifyContent="center">
          <Chip
            link="https://azharzaman.com"
            title="Website"
            icon={<Language style={{ color: "#e2e2e29d" }} fontSize="small" />}
            className="!mt-2 !md:mt-0"
          />
          <Chip
            link="https://github.com/azharzaman1"
            title="Github"
            icon={<GitHub style={{ color: "#e2e2e29d" }} fontSize="small" />}
            className="!mt-2 !md:mt-0"
          />
          <Chip
            link="https://www.linkedin.com/in/azhar-zaman/"
            title="LinkedIn"
            icon={<LinkedIn style={{ color: "#e2e2e29d" }} fontSize="small" />}
            className="!mt-2 !md:mt-0"
          />
              {/*
          <Chip
            link="https://twitter.com/idrazhar"
            title="Twitter"
            icon={<Twitter style={{ color: "#e2e2e29d" }} fontSize="small" />}
            className="!mt-2 !md:mt-0"
          />
          */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

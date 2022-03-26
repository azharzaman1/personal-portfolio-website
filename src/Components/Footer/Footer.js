import { Grid } from "@material-ui/core";
import { GitHub, Language, LinkedIn, Twitter } from "@material-ui/icons";
import { MuiChip } from "../Generic/Theme";

const Footer = () => {
  return (
    <div
      className={`footerSection mt-48 p-4`}
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <Grid container direction="column" alignItems="center">
        <Grid item container justifyContent="center">
          <MuiChip
            link="https://azharzaman.com"
            title="Website"
            icon={<Language style={{ color: "#dbbdd5" }} fontSize="small" />}
          />
          <MuiChip
            link="https://github.com/azharzaman1"
            title="Github"
            icon={<GitHub style={{ color: "#dbbdd5" }} fontSize="small" />}
          />
          <MuiChip
            link="https://www.linkedin.com/in/azhar-zaman/"
            title="LinkedIn"
            icon={<LinkedIn style={{ color: "#dbbdd5" }} fontSize="small" />}
          />
          <MuiChip
            link="https://twitter.com/idrazhar"
            title="Twitter"
            icon={<Twitter style={{ color: "#dbbdd5" }} fontSize="small" />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

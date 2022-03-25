import { Grid } from "@material-ui/core";
import { GitHub, Language, LinkedIn, Twitter } from "@material-ui/icons";
import { Heading2, MuiChip } from "../Generic/Theme";

const Footer = () => {
  return (
    <div
      className={`footerSection mt-32 p-4`}
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Heading2 className="m-0 text-lg pt-1 px-0 pb-2 mb-4">
            Design and developed by Azhar Zaman
          </Heading2>
        </Grid>
        <Grid item container justifyContent="center">
          <MuiChip
            link="https://azharzaman.com"
            title="Website"
            icon={<Language fontSize="small" />}
          />
          <MuiChip
            link="https://github.com/azharzaman1"
            title="Github"
            icon={<GitHub fontSize="small" />}
          />
          <MuiChip
            link="https://www.linkedin.com/in/azhar-zaman/"
            title="LinkedIn"
            icon={<LinkedIn fontSize="small" />}
          />
          <MuiChip
            link="https://twitter.com/idrazhar"
            title="Twitter"
            icon={<Twitter fontSize="small" />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

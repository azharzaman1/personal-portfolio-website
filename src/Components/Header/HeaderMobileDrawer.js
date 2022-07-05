import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid, IconButton } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { EmailOutlined, KeyboardBackspace, WhatsApp } from "@material-ui/icons";
import Button from "../Generic/Theme/Button";
import Text from "../Generic/Theme/Text";

const useStyles = makeStyles((theme) => ({
  mobileNavList: {
    minWidth: 300,
    maxWidth: "98%",
    padding: "0",
  },

  mobileNavLink: {
    color: "#e2e2e2",
    opacity: 0.8,
  },

  mobileNavLinkIcon: {
    color: "#eee",
    opacity: 0.8,
  },

  divider: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  mobileNavHeaderButton: {
    marginTop: 17,
    marginLeft: theme.spacing(2),
    width: "200px",
  },
}));

export default function MobileSideNav({ open, closeDrawer }) {
  const c = useStyles();

  return (
    <div>
      <>
        <Drawer anchor="right" open={open} onClose={closeDrawer}>
          <Grid container direction="column">
            <Grid
              item
              container
              justifyContent="flex-start"
              alignItems="center"
              className={`${c.mobileNavHeader} mobileNav__header`}
            >
              <IconButton color="secondary">
                <KeyboardBackspace
                  onClick={closeDrawer}
                  style={{ color: "#fff" }}
                />
              </IconButton>
              <Grid item>
                <Text className="ml-3">Menu</Text>
              </Grid>
            </Grid>

            <Divider className={c.divider} />

            <Grid item container direction="column">
              <List component="nav" className={`${c.mobileNavList}`}>
                <MuiListItem
                  primaryText="About me"
                  to="about-section-scroll-anchor"
                  closeDrawer={closeDrawer}
                />
                <MuiListItem
                  primaryText="Expertise"
                  to="expertise-section-scroll-anchor"
                  closeDrawer={closeDrawer}
                />
                <MuiListItem
                  primaryText="Recent Work"
                  to="portfolio-section-scroll-anchor"
                  closeDrawer={closeDrawer}
                />
                <MuiListItem
                  primaryText="Get in touch"
                  to="getintouch-section-scroll-anchor"
                  closeDrawer={closeDrawer}
                />
                <Divider className={c.divider} />
                <Grid
                  item
                  container
                  direction="column"
                  spacing={2}
                  className="!ml-2 !mt-2"
                >
                  <Grid item>
                    <RouterLink
                      to="/files/azhar_resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      <Button
                        size="sm"
                        className="font-medium min-w-[150px]"
                        startIcon={<LinkIcon />}
                      >
                        Resume
                      </Button>
                    </RouterLink>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://api.whatsapp.com/send?phone=923170460466&text=Hi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        size="sm"
                        className="font-medium min-w-[150px]"
                        startIcon={<WhatsApp />}
                      >
                        Whatsapp me
                      </Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="mailto:azhar.works1@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        size="sm"
                        className="font-medium min-w-[150px]"
                        startIcon={<EmailOutlined />}
                      >
                        Send email
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </List>
            </Grid>
          </Grid>
        </Drawer>
      </>
    </div>
  );
}

const MuiListItem = ({
  isButton,
  icon,
  primaryText,
  className,
  to,
  duration,
  closeDrawer,
}) => {
  const c = useStyles();
  return (
    <Link
      to={to}
      smooth={true}
      delay={275}
      duration={!duration ? 1000 : duration}
      onClick={closeDrawer}
    >
      <ListItem
        button={isButton || !isButton ? true : false}
        className={className}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={primaryText} className={`${c.mobileNavLink}`} />
      </ListItem>
    </Link>
  );
};

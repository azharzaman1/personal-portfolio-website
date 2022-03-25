import React, { useEffect, useState } from "react";
import {
  AppBar,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./logo.png";
import { Link } from "react-scroll";
import "./Header.css";
import MobileSideNav from "./HeaderMobileDrawer";
import { Link as RouterLink } from "react-router-dom";
import { MuiButton } from "../Generic/Theme";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    boxShadow: "unset",
    borderBottom: `1px solid #090a7a`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  logo: {
    marginLeft: theme.spacing(3),
  },
  navigation: {
    marginRight: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const switchNav = useMediaQuery(theme.breakpoints.down("sm"));
  const [show, handleShow] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  const closeDrawer = () => {
    setDrawerState(false);
  };

  return (
    <>
      <AppBar
        className={`headerAppBar ${classes.appbar} ${show && "shadowed"}`}
        id="headerAppBar"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="750"
      >
        <Grid container alignItems="center">
          <Grid item className={classes.logo}>
            <img className="headerLogo" src={Logo} id="logo" alt="My Logo" />
          </Grid>
          <Grid item xs />
          <Grid className={classes.navigation} item>
            <Hidden smDown>
              <Navigation />
            </Hidden>
            {switchNav && (
              <IconButton
                color="secondary"
                onClick={() => {
                  setDrawerState(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </AppBar>
      <MobileSideNav open={drawerState} closeDrawer={closeDrawer} />
    </>
  );
};

const Navigation = () => {
  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <NavItem
          number="01"
          linkText="About me"
          to="about-section-scroll-anchor"
        />
        <NavItem
          number="02"
          linkText="Expertise"
          duration="1750"
          to="expertise-section-scroll-anchor"
        />
        <NavItem
          number="03"
          linkText="Recent Work"
          duration="2000"
          to="portfolio-section-scroll-anchor"
        />
        <NavItem
          number="04"
          linkText="Get in Touch"
          duration="2250"
          to="getintouch-section-scroll-anchor"
        />
        <Grid item>
          <RouterLink
            to="/files/azhar_resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            <MuiButton
              size="small"
              fontSize="small"
              // link="https://drive.google.com/drive/folders/1cgp8E20b4k92YG5TFFZpp8LjpmrS2470?usp=sharing"
            >
              Resume
            </MuiButton>
          </RouterLink>
        </Grid>
      </Grid>
    </>
  );
};

const NavItem = ({ linkText, to, number, duration }) => {
  return (
    <Grid item>
      <Link
        className="navItem"
        to={to}
        smooth={true}
        duration={duration ? duration : 1500}
      >
        <span>{number}</span>- {linkText}
      </Link>
    </Grid>
  );
};

export default Header;

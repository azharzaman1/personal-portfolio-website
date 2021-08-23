import React, { useState } from "react";
import {
  Container,
  Divider,
  Grid,
  Card,
  makeStyles,
  TextField,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core";
import { Heading2, SectionHeading } from "../../Mui/MuiComponents";
import { WhatsApp, MailOutline } from "@material-ui/icons";
import MuiPopup from "../RecentWork/MuiPopup";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./GetinTouch.css";

const useStyles = makeStyles((theme) => ({
  getInTouchSection: {
    marginTop: "5rem",
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
      padding: "0 16px",
    },
  },

  left: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px",
    },
    "& a": {
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
  },

  right: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: "40px",
    },
  },

  form: {
    padding: "1.5rem 2rem 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "1.5rem 0.75rem",
    },
  },

  input: {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 550,
    },
    [theme.breakpoints.down("xs")]: {
      width: 325,
    },
  },

  popup: {
    padding: "1rem",
  },

  checkIcon: {
    fontSize: "25px",
  },
}));

const GetinTouch = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formStatusPopup, setFormStatusPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const c = useStyles();

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const dynamicDelay = (d, t, m) => {
    if (!isTablet && !isMobile) {
      if (d) {
        return d;
      } else {
        return "300";
      }
    } else if (isTablet && !isMobile) {
      if (t) {
        return t;
      } else {
        return "300";
      }
    } else {
      if (m) {
        return m;
      } else {
        return "300";
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsLoading(true);
      await fetch("https://formsubmit.co/ajax/azharzaman.001@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          FullName: fullName,
          Email: email,
          Company: company,
          Message: message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.success) {
            setFormStatusPopup(true);
            setFullName("");
            setEmail("");
            setCompany("");
            setMessage("");
          }
          console.log(data);
        })
        .catch((error) => {
          setError(error?.message ? error?.message : "");
          console.log(error);
        });
    } else {
      document.getElementById("email-error").innerText =
        "Please enter valid email address";
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const closePopup = () => {
    setFormStatusPopup(false);
  };

  return (
    <div className={`getInTouchSection ${c.getInTouchSection}`}>
      <MuiPopup open={formStatusPopup} closePopup={closePopup}>
        <Card className={c.popup}>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <CheckCircleOutlineIcon
                className="getInTouch__popupIcon"
                color="secondary"
              />
            </Grid>
            <Grid item>
              <Heading2 className="getInTouch__popupHeading">
                Your message is recieved
              </Heading2>
              <p
                style={{ textAlign: "center", margin: "0", marginTop: "10px" }}
              >
                I will try to get back to you possibly in 1-3 Hrs <br /> For
                quicker response please
              </p>
            </Grid>
            <Grid item>
              <a
                href="https://api.whatsapp.com/send?phone=+923170460466"
                target="_blank"
                rel="noreferrer"
              >
                <Button color="secondary" style={{ marginTop: "5px" }}>
                  Whatsapp me
                </Button>
              </a>
            </Grid>
          </Grid>
        </Card>
      </MuiPopup>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="03">
          Lets Work together!
        </SectionHeading>
        <Grid
          container
          className="getInTouchSection__content"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            className={`${c.left} getInTouchSection__left`}
            justifyContent="center"
          >
            <Grid item xs={12} md={9}>
              <p data-aos="fade-up" data-aos-delay="600">
                Well! Thanks for giving some time to my portfolio website. You
                reached this point, means your interest for me. If you want me
                build something for you, something efficient, something cool,
                give me a signal. Or in case you want to discuss about your
                project, my inbox is waiting for you. Thanks
              </p>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              className="getInTouchSection__leftEmails"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Grid item>
                <MailOutline
                  fontSize={isMobile ? "medium" : "large"}
                  color="secondary"
                />
              </Grid>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Grid item className="getInTouchSection__leftEmails-emails">
                <a href="mailto:azharzaman.001@gmail.com">
                  azharzaman.001@gmail.com
                </a>
              </Grid>
            </Grid>
            <Grid
              item
              container
              className="getInTouchSection__leftWhatsApp"
              alignItems="center"
              data-aos="fade-up"
              data-aos-delay="950"
            >
              <Grid item>
                <WhatsApp
                  fontSize={isMobile ? "medium" : "large"}
                  color="secondary"
                />
              </Grid>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Grid item>
                <a
                  href="https://api.whatsapp.com/send?phone=+923170460466"
                  target="_blank"
                  rel="noreferrer"
                >
                  +92 3154860263
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            className={`getInTouchSection__right ${c.right}`}
            justifyContent={isMobile ? "center" : "flex-end"}
            data-aos={isTablet || isMobile ? "fade-up" : "fade-left"}
            data-aos-delay={dynamicDelay("1500", null, null)}
          >
            <Grid item>
              <form
                className={`getInTouch__form ${c.form}`}
                autoComplete="off"
                id="form"
                onSubmit={handleFormSubmit}
              >
                <Heading2 className="getInTouchForm__heading">
                  Please fill in your details and hit Send
                </Heading2>
                <Grid item container direction="column">
                  <TextField
                    name="name"
                    label="Full Name"
                    variant="filled"
                    color="secondary"
                    autoComplete={false}
                    className={`${c.input}`}
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />

                  <TextField
                    name="email"
                    label="Email address"
                    variant="filled"
                    color="secondary"
                    autoComplete={false}
                    className={`${c.TextField} m-t-07rem`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <span
                    id="email-error"
                    className="error-message email-error"
                  ></span>

                  <TextField
                    name="company-name"
                    label="Company Name (Optional)"
                    variant="filled"
                    color="secondary"
                    className={`${c.TextField} m-t-07rem`}
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />

                  <TextField
                    label="Enter your message please"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    className={`${c.formControl} m-t-125rem`}
                    color="secondary"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />

                  <input
                    className="hidden-input"
                    type="hidden"
                    name="_next"
                    value="http://localhost:3000/"
                  />
                  <input
                    className="hidden-input"
                    type="hidden"
                    name="_subject"
                    value="New submission!"
                  />
                  <input
                    className="hidden-input"
                    type="hidden"
                    name="_template"
                    value="table"
                  />
                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                    className="hidden-input"
                  />
                  <input
                    type="submit"
                    value={isLoading ? "Sending ..." : "Send"}
                    className="getInTouch__submitButton"
                  />
                </Grid>
                <p className="getInTouch__error">{error}</p>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GetinTouch;

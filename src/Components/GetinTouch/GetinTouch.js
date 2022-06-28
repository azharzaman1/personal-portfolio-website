import React, { useState } from "react";
import {
  Divider,
  Grid,
  Card,
  TextField,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core";
import { WhatsApp, MailOutline } from "@material-ui/icons";
import MuiPopup from "../RecentWork/MuiPopup";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { validateEmail } from "../../utils/utils";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";
import "./GetinTouch.css";
import { Heading2, SectionHeading } from "../Generic/Theme";

const GetinTouch = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formStatusPopup, setFormStatusPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      await fetch("https://formsubmit.co/ajax/azhar.works1@gmail.com", {
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

  const closePopup = () => {
    setFormStatusPopup(false);
  };

  return (
    <SectionLayout className={`getInTouchSection`}>
      <FormConfirmationDialog
        closePopup={closePopup}
        formStatusPopup={formStatusPopup}
      />
      <LayoutContainer>
        <div className="mb-5">
          <SectionHeading type="2" number="04">
            Lets Work together!
          </SectionHeading>
        </div>

        <Grid
          container
          justifyContent="center"
          className="getInTouchSection__content"
        >
          <Grid
            item
            xs={12}
            md={6}
            className={`getInTouchSection__left`}
            justifyContent="center"
          >
            <Grid item xs={12} md={9}>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="leading-6 max-w-lg text-sm md:text-[15px] font-normal font-sans mb-5"
              >
                Well! You reached this point, means your interest in my
                skill-set. If you want me build something for you, something
                efficient, something cool, give me a signal. Or in case you just
                want to discuss your project, my inbox is always waiting for
                nice persons like you. Thanks
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
                <a href="mailto:azhar.works1@gmail.com">
                  azhar.works1@gmail.com
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
                  +92 3170460466
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            className={`pt-12 md:pt-0 w-full justify-center md:justify-end`}
            data-aos={isTablet || isMobile ? "fade-up" : "fade-left"}
            data-aos-delay={dynamicDelay("1500", null, null)}
          >
            <form
              className={`getInTouch__form py-6 px-4 md:px-6 rounded-md w-full max-w-lg bg-backgroundContrast`}
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
                  fullWidth
                  autoComplete={false}
                  className={``}
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
                  className={`m-t-07rem`}
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
                  className={`m-t-07rem`}
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
                  className={`m-t-125rem`}
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
      </LayoutContainer>
    </SectionLayout>
  );
};

const FormConfirmationDialog = ({ formStatusPopup, closePopup }) => {
  return (
    <MuiPopup open={formStatusPopup} closePopup={closePopup}>
      <Card className="p-4">
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
            <p style={{ textAlign: "center", margin: "0", marginTop: "10px" }}>
              I will try to get back to you as soon I see you message. <br />{" "}
              For quicker response please
            </p>
          </Grid>
          <Grid item>
            <a
              href="https://api.whatsapp.com/send?phone=+923170460466"
              target="_blank"
              rel="noreferrer noopenner"
            >
              <Button color="secondary" style={{ marginTop: "5px" }}>
                Whatsapp me
              </Button>
            </a>
          </Grid>
        </Grid>
      </Card>
    </MuiPopup>
  );
};

export default GetinTouch;

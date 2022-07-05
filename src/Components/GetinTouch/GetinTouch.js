import React, { useState } from "react";
import {
  Divider,
  Grid,
  Card,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { WhatsApp, MailOutline } from "@material-ui/icons";
import MuiPopup from "../RecentWork/MuiPopup";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { validateEmail } from "../../utils/utils";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";
import Button from "../Generic/Theme/Button";
import Text from "../Generic/Theme/Text";
import Heading from "../Generic/Theme/Heading";
import "./GetinTouch.css";

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
      {formStatusPopup && (
        <FormConfirmationDialog
          closePopup={closePopup}
          formStatusPopup={formStatusPopup}
        />
      )}

      <LayoutContainer>
        <div className="mb-5">
          <Heading type="section" index="04">
            Lets Work together!
          </Heading>
          <div id="getintouch-section-scroll-anchor" />
        </div>

        <Grid
          container
          justifyContent="center"
          className="getInTouchSection__content"
        >
          <Grid item xs={12} md={6} className={`getInTouchSection__left`}>
            <Grid item xs={12} md={9}>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="leading-6 max-w-lg text-sm md:text-[15px] font-normal font-sans mb-5"
              >
                Well! You reached this point, means your interest in my
                skill-set. If you want me build something awesome for you, or
                you just want to discuss your project, or have a role for me at
                your awesome company, my inbox itself is waiting for you. Thanks
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
                  href="https://api.whatsapp.com/send?phone=923170460466&text=Hi"
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
              <Text className="text-center mb-5">
                Please fill in your details and hit Send
              </Text>
              <Grid item container direction="column">
                <TextField
                  name="name"
                  label="Full Name"
                  variant="filled"
                  color="secondary"
                  fullWidth
                  autoComplete="off"
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
                  autoComplete="off"
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
                <Button variant="contained" isSubmitButton className="mt-4">
                  {isLoading ? "Sending ..." : "Send Message"}
                </Button>
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
            <Heading center>Your message is recieved</Heading>
            <p className="text-center mt-2">
              I will get back to you as soon I see you message. <br /> For
              quicker response please
            </p>
          </Grid>
          <Grid item className="!mt-3">
            <a
              href="https://api.whatsapp.com/send?phone=923170460466&text=Hi"
              target="_blank"
              rel="noreferrer noopenner"
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

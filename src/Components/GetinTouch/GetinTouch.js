import React from "react";
import {
  Container,
  Divider,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  InputLabel,
  Select,
} from "@material-ui/core";
import { Heading2, SectionHeading } from "../../Mui/MuiComponents";
import { WhatsApp, MailOutline } from "@material-ui/icons";
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
      padding: "0 24px",
    },
  },
}));

const GetinTouch = () => {
  const c = useStyles();

  return (
    <div className={`getInTouchSection ${c.getInTouchSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="03">
          Lets Work together!
        </SectionHeading>
        <Grid container spacing={2} className="getInTouchSection__content">
          <Grid
            item
            className={`${c.getInTouchSection__left} getInTouchSection__left`}
            xs={12}
            md={6}
          >
            {/* <Grid item>
              <Heading2>Get in Touch</Heading2>
            </Grid> */}
            <Grid
              item
              container
              className="getInTouchSection__leftEmails"
              alignItems="center"
            >
              <Grid item>
                <MailOutline fontSize="large" color="secondary" />
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
            >
              <Grid item>
                <WhatsApp fontSize="large" color="secondary" />
              </Grid>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Grid item>
                <a
                  href="https://api.whatsapp.com/send?phone=15551234567"
                  target="_blank"
                >
                  +92 3154860263
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="getInTouchSection__right" xs={12} md={6}>
            <form
              action="https://formsubmit.co/azharzaman.001@gmail.com"
              method="POST"
              className="getInTouch__form"
              autoComplete="off"
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
                  className={`${c.TextField}`}
                />

                <TextField
                  name="email"
                  label="Email address"
                  variant="filled"
                  color="secondary"
                  autoComplete={false}
                  className={`${c.TextField} m-t-07rem`}
                />

                <TextField
                  name="company-name"
                  label="Company Name (Optional)"
                  variant="filled"
                  color="secondary"
                  className={`${c.TextField} m-t-07rem`}
                />

                <TextField
                  label="Enter your message please"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  className={`${c.formControl} m-t-125rem`}
                  color="secondary"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Hi!<br/>Its Azhar Zaman<br/><br/>I have recieved your message you submitted at azharzaman.com.<br/>I will get back to your within possibly 1-3 Hours."
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
                  value="Submit"
                  className="getInTouch__submitButton"
                />
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GetinTouch;

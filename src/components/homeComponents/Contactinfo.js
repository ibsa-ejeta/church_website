import React from "react";
import {
  Card,
  Grid,
  Box,
  Container,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
const useStyles = makeStyles(() => ({
  projectContact: {
    paddingTop: "9rem",
    textAlign: "center",
  },
  homeContact: {
    marginLeft: "2rem",
    color: "red"
  },
  homePaper: {
    marginTop: "3rem",
    backgroundColor: "#A6D1E6",
    textAlign: "center",
    alignItems: "center"
  },
  contactCard: {
    margin: "1rem",
    paddingBottom: "5rem",
    textAlign: "center",
    alignItems: "center",
    borderStyle: "none",
    backgroundColor: "#A6D1E6",
    boxShadow: "none",
  },
  social_media: {
    textAlign: "center",
    margin: "auto",
    paddingTop: "1rem",
    borderStyle: "none",
    backgroundColor: "#A6D1E6",
    boxShadow: "none",
  }
}));

const Contactinfo = () => {
  const classes = useStyles();
  return (
  
      <Container justify="center" alignItems="center"
      alignContent="center" className={classes.homePaper} elevation={6}>
        
            <Card 
            component="div"
            raised
            container
            alignItems="center"
            alignContent="center"
            direction="row"
            md={8}
            spacing={3}
            className={classes.contactCard}>
              <Typography variant="h5">Contact Us</Typography>
              <Typography>
              If you have specific questions, prayer requests, or general inquiries, please contact us!
              </Typography>
              <Card className={classes.social_media}>
              {/* <a
                href="https://www.facebook.com/OromoCCToronto"
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h6">
                  <FacebookIcon fontSize="" /> Facebook
                </Typography>
              </a> */}
              <a
                href="https://www.youtube.com/channel/UC9a_uVqsWTs1BlbBKI9mp1g"
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h6">
                  <YouTubeIcon fontSize="" /> YouTube
                </Typography>
              </a>
              <a href="mailto:tocct2012@gmail.com" target="_blank" rel="noreferrer">
                <Typography variant="h6">
                  <EmailIcon fontSize="" /> Send an email
                </Typography>
              </a>
              <a href="tel:1-416-268-7751" target="_blank" rel="noreferrer">
                <Typography variant="h6">
                  <PhoneIphoneIcon fontSize="" /> Give us a call
                </Typography>
              </a>
              </Card>
              <br/>
              <Typography variant="h6">Address </Typography>
              <Typography variant="body1" component="">330 Bellamy Road North</Typography>
              <Typography variant="body1" component="">Scarborough, ON </Typography>
              <Typography variant="body1" component="">M1H 1E8, Canada</Typography>
            </Card>
        
      </Container>
      
    
)};

export default Contactinfo;

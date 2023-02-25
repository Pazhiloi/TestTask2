import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      marginTop: "auto",
      padding: theme.spacing(3),
    },
    text: {
      textAlign: "center",
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="body1" className={classes.text}>
          © 2023 - My Website
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() =>
  createStyles({
    pd: {
      paddingTop: 30,
      paddingBottom: 30,
    },
    root: {
      display: "flex",
      margin: "auto",
      maxWidth: 1400,
    },
    media: {
      width: "50%",
      paddingTop: "56.25%", // 16:9
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 8,
    },
    text: {
      fontSize: 14,
    },
  })
);

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.pd}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200"
          title="Random Image"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h1" component="h1">
            Welcome to my Website
          </Typography>
          <Typography className={classes.subtitle} variant="h2" component="h2">
            About Me
          </Typography>
          <Typography className={classes.text} variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h2" component="h2">
            Recent News
          </Typography>
          <Typography className={classes.subtitle} variant="h5" component="h5">
            New Feature Added
          </Typography>
          <Typography className={classes.text} variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;

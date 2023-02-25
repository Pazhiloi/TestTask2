import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { logOut, selectUser } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#fff", // change the link color
    textDecoration: "none", // remove the underline
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectUser);

  // Function below (checkRoute) decide what route will be depends on authorization state
  const checkRoute = (): JSX.Element => {
    if (auth) {
      return (
        <Button component={Link} to="/profile" color="inherit">
          Profile
        </Button>
      );
    } else {
      return (
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
      );
    }
  };
  const renderLogout = () => {
    if (auth) {
     return <Button onClick={() =>{
         dispatch(logOut())
         }}   color="inherit">
        Log Out
      </Button>;
    }else{
      return ''
    }
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link className={classes.link} to={"/"}>
            My Website
          </Link>
        </Typography>
        <Button component={Link} to="/news" color="inherit">
          News
        </Button>
        {checkRoute()}
        {renderLogout()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectUser);

  // This function help you to change the language 
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Function below (checkRoute) decide what route will be depends on authorization state
  const checkRoute = (): JSX.Element => {
    if (auth) {
      return (
        <Button component={Link} to="/profile" color="inherit">
          {t("menu.profile")}
        </Button>
      );
    } else {
      return (
        <Button component={Link} to="/login" color="inherit">
          {t("menu.login")}
        </Button>
      );
    }
  };
  const renderLogout = () => {
    if (auth) {
     return (
       <Button
         onClick={() => {
           dispatch(logOut());
         }}
         color="inherit"
       >
         {t("menu.logout")}
       </Button>
     );
    }else{
      return ''
    }
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link className={classes.link} to={"/"}>
            {t("menu.home")}
          </Link>
        </Typography>
        <Button component={Link} to="/news" color="inherit">
          {t("menu.news")}
        </Button>
        {checkRoute()}
        {renderLogout()}
        <Button onClick={() => changeLanguage("en")} color="inherit">
          English
        </Button>
        <Button onClick={() => changeLanguage("uk")} color="inherit">
          Українська
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

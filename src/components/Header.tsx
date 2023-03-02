import React from "react";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useHeaderHelper from "../utils/headerUtils";



const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { renderLogout, checkRoute } = useHeaderHelper();
  // This function help you to change the language 
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to={"/"}>{t("menu.home")}</Link>
        </Typography>
        <Button component={Link} to="/news" color="inherit">
          {t("menu.news")}
        </Button>
        {/* this two functions below is taken from utils folder */}
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

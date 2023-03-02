import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logOut, selectUser } from "../features/user/userSlice";
import {  Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useHeaderHelper = () => {
  const { t } = useTranslation();
  const auth = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  // Function below (checkRoute) decide what route will be depends on authorization state
  const checkRoute = () => {
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

  // Function below renders logout element if user  is already registered
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
    } else {
      return "";
    }
  };
  
  // Below we return this two functions to then restructure and get them  from our useHeaderHelper hook
  return { renderLogout, checkRoute };
};


export  default useHeaderHelper;

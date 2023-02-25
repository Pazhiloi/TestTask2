import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button component={Link} to="/news" color="inherit">
          News
        </Button>
        <Button component={Link} to="/profile" color="inherit">
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

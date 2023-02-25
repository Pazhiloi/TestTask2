import { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import { useAppSelector } from "../app/hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ProfilePage: React.FC = () => {
  const classes = useStyles();
 const auth = useAppSelector(selectUser);
   const navigate = useNavigate();
   useEffect(() => {
     if (!auth) {
       navigate("/");
     } else {
       navigate("/profile");
     }
   }, [auth]);

  return (
    <Box className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography variant="h2">Profile</Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6">First Name: John</Typography>
            <Typography variant="h6">Second Name: Doe</Typography>
            <Typography variant="h6">Email: JohnDoe@example.com</Typography>
            <Typography variant="h6">Phone Number: +380123456789</Typography>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Edit profile
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;

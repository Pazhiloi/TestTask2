import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useAppSelector } from "../app/hooks";
import { selectError, selectUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import useForm from "../utils/loginUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingTop: 10,
    paddingBottom: "30%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  },
  input: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
    width: "100%",
  },
}));



const LoginForm: React.FC = () => {
  const classes = useStyles();
  const error = useAppSelector(selectError);
  const auth = useAppSelector(selectUser);
  const navigate = useNavigate()
  // below we get this functions from useForm hook
  const {
    handleUsernameChange,
    handlePasswordChange,
    handleShowPasswordClick,
    handleFormSubmit,
    username,
    password,
    showPassword,
  } = useForm();

  useEffect(() => {
    // if auth is true we redirect user to the profile page
    if (auth) {
      navigate('/profile')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])
  

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          className={classes.input}
          value={username}
          onChange={handleUsernameChange}
        />
        <FormControl className={classes.input} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleShowPasswordClick}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

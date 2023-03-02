import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { logIn } from '../features/user/userSlice';

const useForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  // this two functions (handleUsernameChange and handlePasswordChange ) hepls us to control input components(controlled input components)
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // function below show or hide password
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  // this function dispatch login action and erases the password and username
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(logIn({ username, password }));
    setUsername("");
    setPassword("");
  };
  return {
    handleUsernameChange,
    handlePasswordChange,
    handleShowPasswordClick,
    handleFormSubmit,
    username,
    password,
    showPassword,
  };
};

export default useForm;
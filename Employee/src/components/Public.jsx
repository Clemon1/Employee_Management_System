import React, { useState, useEffect } from "react";
import "./dash.css";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/auth/authSlice";
import { Snackbar } from "@mui/material";

const Public = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken, foundUser } = await login({
        email,
        password,
      }).unwrap();

      console.log(accessToken, foundUser);
      dispatch(setCredentials({ accessToken, foundUser }));
      setEmail("");
      setPassword("");
      navigate("/dash");
    } catch (err) {
      console.log(err.data);
      setErrMsg(err.data);
      setOpen(true);
    }
  };

  const content = (
    <section>
      <main className='login__page'>
        <form className='form__login' onSubmit={handleSubmit}>
          <div className='form__login-group'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form__login-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='form__login-button'>Login</button>
        </form>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={errMsg}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </section>
  );
  return content;
};

export default Public;

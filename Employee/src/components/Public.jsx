import React, { useState, useRef, useEffect } from "react";
import "./dash.css";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/auth/authSlice";
import { Snackbar } from "@mui/material";

const Public = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(true);
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
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      setOpen(true);
      errRef.current.focus();
    }
  };
  // const errClass = errMsg ? "errmsg" : "offscreen";
  if (isLoading) return <p>Loading...</p>;
  const content = (
    <section>
      <main className="login__page">
        {/* <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p> */}
        <form className="form__login" onSubmit={handleSubmit}>
          <div className="form__login-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              ref={userRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__login-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form__login-button">Login</button>
        </form>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={errMsg}
        // action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </section>
  );
  return content;
};

export default Public;

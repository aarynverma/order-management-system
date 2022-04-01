import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
const Login = ({ login, setLogin }) => {
  const navigate = useHistory();
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 5) {
      errors.password = "Must be 5 characters or greater";
    }
    if (!values.email) {
      errors.email = "Email Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: (e) => {
      // e.preventDefault();
      console.log("logged in");
      if (
        loginForm.values.email == "aryan@gmail.com" &&
        loginForm.values.password == "aryanverma123"
      ) {
        navigate.push("/add");
        setLogin(true);
      }
    }
  });

  return (
    <>
      <h2 className="loginHeader">Login</h2>
      <div className="loginDiv">
        <form className="formWrapper" onSubmit={loginForm.handleSubmit}>
          <input
            className="registerInput"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.email}
          />
          {loginForm.touched.email && loginForm.errors.email ? (
            <div className="errorMessage">{loginForm.errors.email}</div>
          ) : null}
          <input
            className="registerInput topMargin1rem"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.password}
          />
          {loginForm.touched.password && loginForm.errors.password ? (
            <div className="errorMessage">{loginForm.errors.password}</div>
          ) : null}
          <Button
            variant="primary"
            type="submit"
            disabled={!loginForm.isValid}
            className="loginbtn topMargin1rem"
          >
            Log In
          </Button>
        </form>
      </div>
    </>
  );
};
export default Login;

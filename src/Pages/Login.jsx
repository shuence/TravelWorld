import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    setError(null); // Reset the error on each login attempt
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message);
        dispatch({ type: "LOGIN_FAILURE", payload: result.message });
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: result });
        setSuccess("Login successful!"); // Set the success message
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again later.");
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      autoComplete="true"
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <div className="password__input">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        autoComplete="true"
                        id="password"
                        onChange={handleChange}
                      />
                      <i
                        className={`ri-eye-line${showPassword ? "-slash" : ""}`}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={handleClick}
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

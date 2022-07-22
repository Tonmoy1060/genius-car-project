import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const navigateToReg = () => {
    navigate("/register");
  };
  const submitButton = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInWithEmailAndPassword(email, pass);

  };

  const from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from, { replace: true });
  }
  return (
    <div className="container w-25 mx-auto ">
      <h1 className="text-center mt-5 mb-4">Please Login</h1>
      <Form onSubmit={submitButton}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="mt-4">
        New to genius car?{" "}
        <Link
          to={"/register"}
          onClick={navigateToReg}
          className="text-decoration-none pe-auto text-danger"
        >
          Please register{" "}
        </Link>
      </p>
    </div>
  );
};

export default Login;

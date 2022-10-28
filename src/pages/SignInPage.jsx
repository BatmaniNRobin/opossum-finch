import { useState, useEffect } from "react";
import {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerEmailandPassword,
  sendPasswordReset,
  logout,
  auth,
} from "../components/SignIn";

import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // todo trigger a loading screen
      return;
    }
    // todo if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <h1 className="logo">Tapped</h1>
      <div className="login">
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
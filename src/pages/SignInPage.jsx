import { useState, useEffect } from "react";
import {
  signInWithGoogle,
  signInWithApple,
  logout,
  auth,
} from "../components/SignIn";

import { useAuthState } from "react-firebase-hooks/auth";

const SignInPage = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // todo trigger a loading screen
      return;
    }
    // todo if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="wrapper">
      <div className="form">
            <div>
              <img
                className=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Please Sign-In Below
              </p>
            </div>
            <button
              className="btn btn-primary mb-3"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
            <button
              className="btn btn-primary mb-3"
              onClick={signInWithApple}
            >
              Login with Apple
            </button>
          </div>
      <img
        className="right-img"
        src="../src/imgs/B9A6A83A-0F0F-4427-9597-D5F1DAE14CFF_Original.jpg"
      />
    </div>
  );
};

export default SignInPage;

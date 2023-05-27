import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import SocialMedia from "../components/SocialMedia";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen mx-auto bg-slate-600 flex justify-center items-center min-h-[100vh] in">
        <img
          src="https://res.cloudinary.com/doqmdeqem/image/upload/v1681734978/shopping-07_ybrwko.jpg"
          alt="bg"
          className="fixed w-full"
        />
        <div className="fixed w-full px-4 py-20 z-50 ">
          <div className="max-w-[450px] h-[450px] mx-auto bg-black/80 text-white rounded-md">
            <div className="max-w-[320px] mx-auto py-16 px-3 md:px-0">
              <div className="logo-login text-center ">
                <img
                  src="https://res.cloudinary.com/doqmdeqem/image/upload/v1677313332/samples/ecommerce/accessories-bag.jpg"
                  alt="logo"
                  className="w-[90px] h-[50px] mx-auto rounded-xl"
                />
                <h1 className="text-4xl text-red font-bold">Shopping Hub</h1>
              </div>
              <h1 className="text-3xl  font-bold">Sign In</h1>
              {error ? <small className="text-red-500">{error}</small> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-gray-600 px-2 py-3 my-8 rounded font-semibold hover:bg-slate-600 transition-all text-red duration-300"
                >
                  Sign In
                </button>
                <div className=" flex justify-between items-center font-medium mb-3 text-gray-500">
                  <p className="mr-2">
                    {" "}
                    <input type="checkbox" /> Remember me ?
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p>
                  <span className="text-gray-400">Create Your Account ?</span>
                  <Link to="/signup"> Sign Up</Link>{" "}
                </p>
              </form>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

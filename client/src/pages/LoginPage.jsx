import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const { setuser } = useContext(UserContext);

  const Loginfrom = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setuser(data);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (redirect) {
    navigate("/");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center border border-red-700 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Get started today
        </h1>

        <form
          action=""
          className="mt-6 mb-0 space-y-4 bg-white rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={Loginfrom}
        >
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link className="underline" href="" to={`/register`}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

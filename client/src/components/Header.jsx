import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className=" p-5 flex justify-between items-center ">
      <div className="flex  w-fit p-3 space-x-3">
        <Link to={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </Link>

        <h1 className="tracking-wider font-bold">Bookit</h1>
      </div>
      <div className=" flex justify-center items-center">
        <Link to={user ? "/account" : "/login"}>
          {user ? (
            <>
              <div className="flex space-x-4 justify-center items-center bg-red-300 p-2 rounded-md shadow-md"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {user && (
                  <div>
                    {" "}
                    <h1 className="font-bold ">{user.name}</h1>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex ">
                <button
                  type="button"
                  class="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal  bg-red-300 shadow-md"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;

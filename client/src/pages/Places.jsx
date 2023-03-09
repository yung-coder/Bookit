import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import PlaceImg from "../components/PlaceImg";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user-places", { withCredentials: true })
      .then(({ data }) => {
        setPlaces(data);
      });
  }, []);
  return (
    <div className=" p-4  bg-gradient-to-r from-rose-100 to-teal-100 h-screen">
      <AccountNav />
      <div className="text-center ">
        <Link
          className="inline-flex gap-1 bg-red-400 text-white py-2 px-6 rounded-full "
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4  flex  flex-col space-y-4  overflow-auto justify-center items-center ">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="flex flex-col md:flex-row m-5   cursor-pointer gap-4 w-[900px]  bg-gray-100 p-4 rounded-2xl"
              key={place._id}
            >
              <div className="w-full md:w-48">
                <PlaceImg place={place} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}...</h2>
                <p className="text-sm mt-2">
                  {place.description}...
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Places;

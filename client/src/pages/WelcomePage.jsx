import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ImageCustom from "../components/Image";

const WelcomePage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("https://bookit-wrul.onrender.com/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div className="flex  p-5 space-y-8 md:space-y-0  flex-wrap md:space-x-10   max-h-max md:h-screen  w-screen overflow-scroll  bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
      {places.length > 0 &&
        places.map((place) => (
          <Link
            to={"/place/" + place._id}
            className="bg-white h-fit rounded-lg"
            key={place._id}
          >
            <div
              href="#"
              className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
            >
              <img
                src={place.photos[0].url}
                alt=""
                className=" h-72 rounded-md"
              />
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only"></dt>

                    <dd className="font-medium">{place.title}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">{place.address}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">$</dt>

                    <dd className="text-sm text-gray-500">${place.price}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default WelcomePage;

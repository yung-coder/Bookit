import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ImageCustom from "../components/Image";

const WelcomePage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div className="flex p-9 flex-wrap md:space-x-10 w-screen h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
      {places.length > 0 &&
        places.map((place) => (
          <Link
            to={"/place/" + place._id}
            className="bg-white h-fit rounded-lg"
          >
            <a
              href="#"
              class="block rounded-lg p-4 shadow-sm shadow-indigo-100"
            >
              <ImageCustom
                className="rounded-2xl object-cover aspect-square"
                src={place.photos?.[0]}
                class="h-56 w-full rounded-md object-cover"
                alt=""
              />
              <div class="mt-2">
                <dl>
                  <div>
                    <dt class="sr-only"></dt>

                    <dd class="font-medium">{place.title.slice(0, 30)}...</dd>
                  </div>
                  <div>
                    <dt class="sr-only">Address</dt>

                    <dd class="font-medium">{place.address.slice(0, 50)}...</dd>
                  </div>
                  <div>
                    <dt class="sr-only">$</dt>

                    <dd class="text-sm text-gray-500">${place.price}</dd>
                  </div>
                </dl>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default WelcomePage;

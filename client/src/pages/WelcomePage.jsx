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
    <div className="flex p-9  border border-red-600">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id}>
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

                    <dd class="font-medium">{place.title.slice(0,30)}...</dd>
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

                <div class="mt-6 flex items-center gap-8 text-xs">
                  <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <svg
                      class="h-4 w-4 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>

                    <div class="mt-1.5 sm:mt-0">
                      <p class="text-gray-500">Parking</p>

                      <p class="font-medium">2 spaces</p>
                    </div>
                  </div>

                  <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <svg
                      class="h-4 w-4 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>

                    <div class="mt-1.5 sm:mt-0">
                      <p class="text-gray-500">Bathroom</p>

                      <p class="font-medium">2 rooms</p>
                    </div>
                  </div>

                  <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <svg
                      class="h-4 w-4 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>

                    <div class="mt-1.5 sm:mt-0">
                      <p class="text-gray-500">Bedroom</p>

                      <p class="font-medium">4 rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default WelcomePage;

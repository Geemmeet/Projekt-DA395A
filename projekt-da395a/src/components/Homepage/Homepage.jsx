"use client";

import { Select, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Homepage() {
  //router to redirect
  const router = useRouter();

  //UseState of diet
  const [diet, setDiet] = useState("none");

  return (
    <>
      <div className="homepage">
        <section className="bg-white dark:bg-gray-900">
          <div className="flex flex-col lg:flex-col  px-4 py-8 mx-auto gap-8 lg:gap-16 lg:py-16 md:flex-col ">
            <div className="order-first lg:mb-[-4rem] flex-shrink-0  md:basis-2/4 lg:basis-5/12 flex justify-center lg:justify-center">
              <img
                src="/fast-food-placeholder.svg"
                alt="mockup"
                className="sm:max-w-xs mt-0 mb-0 md:max-w-md lg:max-w-md w-1/8 h-auto"
              />
            </div>
            <div className="self-center mt-0 md:text-center lg:text-center lg:basis-8/12">
              <h1 className= "text-4xl sm:text-6xl lg:text-8xl mb-4 max-w-xl">a recipe <br></br> inspiration place</h1>
              <p className="fraunces max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Choose you're diet and your set to go</p>

              <div className="flex flex-col md:flex-row justify-center">
                <Select
                  value={diet}
                  onChange={(e) => {
                    setDiet(e.target.value);
                    console.log(e.target.value);
                  }}
                  id="diets"
                  className="fraunces w-full me-1 md:w-1/2 justify-center"
                >
                  <option value="" disabled hidden>
                    Choose your diet..
                  </option>
                  <option value="none">No preference</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </Select>
                <div>
                  <Button
                    className="mt-3 md:mt-0 md:ms-3 bg-white text-gray-800 border border-gray-300 hover:bg-[#DAD5F3] hover:text-white hover:cursor-pointer"
                    onClick={() => router.push("/select/" + diet)}
                  >
                    {/* push() in this context is a router function NOT a funcition to add to an array. */}
                    <span className="fraunces">Get started</span>
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

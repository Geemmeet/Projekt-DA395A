'use client'
import { Select } from "flowbite-react";


export default function Landingpage() {
  return (

    <>

      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
             
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Your receipe inspiration place</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Choose your diet and your set to go</p>

              <div className="flex flex-col md:flex-row">
                <div href="#" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-base font-medium text-center ">
                  <Select id="countries" className="w-full" defaultValue="none">
                    <option value="none" disabled hidden>Choose your diet..</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="vegan">Vegan</option>
                    <option>..</option>
                  </Select>
                </div>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-400">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
           <div className="lg:mt-0 lg:col-span-5 lg:flex md:mt-0 md:col-span-3 md:flex">
              <img src="https://www.fmt.se/wp-content/uploads/2023/02/logo-placeholder-image.png" alt="mockup" />
            </div>
          </div>

        </section>
      </div>


    </>
  );
}
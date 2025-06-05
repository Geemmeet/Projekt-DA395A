"use client";
import { Popover } from "flowbite-react";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { useRouter } from "next/navigation";

export function ModalComponent({ show, onClose, recipe }) {
  const router = useRouter();
  const content = (<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
    <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
      <h3 className="londrina_solid font-semibold text-gray-900 dark:text-white">Price Range</h3>
    </div>
    <div className="px-3 py-2">
      <p className="text-red-400"> $$$ = Expensive </p>
      <p className="text-amber-400">$$ = Medium</p>
      <p className="text-green-400">$ = Cheap</p>
    </div>
  </div>)

  function pricePerServing(pricePerS) {
    const price = parseFloat(pricePerS)
    if (price <= 200) {
      return (<p className="text-green-400 fraunces text-base leading-relaxed mr-2">$</p>)
    }
    else if (price <= 400) {
      return (<p className="text-amber-400 fraunces text-base leading-relaxed mr-2">$$</p>)
    }
    else {
      return (<p className="text-red-400 fraunces text-base leading-relaxed mr-2"> $$$</p>)
    }



  }
  return (
    <>
      <Modal dismissible show={show} onClose={onClose}>
        <ModalHeader className="londrina_solid">{recipe.title}</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-2 shadow-lg"
            />
            <p className="fraunces text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
              Cookingtime: {recipe.readyInMinutes}
            </p>
            <p className="fraunces text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
              Servings: {recipe.servings}
            </p>

            <Popover content={content} trigger="hover" placement="top">
              <span className="inline-flex items-center hover:cursor-pointer">
              
                Pricerange: {pricePerServing(recipe.pricePerServing)}
             
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </span>

            </Popover>


            <div className="fraunces" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          </div>
          {/*The Api returns a summary text with HTML tags. Solution: https://www.geeksforgeeks.org/reactjs-dangerouslysetinnerhtml-attribute*/}
        </ModalBody>
        <ModalFooter>
          <Button
            className="hover:cursor-pointer bg-purple-500 hover:bg-purple-800"
            onClick={(e) => {
              //Stop propagation is used so the modal does not open when clicking on "Show recipe"
              e.stopPropagation();
              router.push(`/recipe/${recipe.id}`);
            }}
          >
            Show Recipe
          </Button>
          <Button
            color="light"
            className="hover:cursor-pointer"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

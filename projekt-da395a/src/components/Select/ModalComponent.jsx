"use client";

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

  function pricePerServing (pricePerS) {
    const price = parseFloat(pricePerS)
    if (price <= 200 ) {
      return ("$")
    }
    else if (price <= 400 ){
      return ("$$")
    }
    else {
      return ("$$$")
    }
  }
  return (
    <>
      <Modal show={show} onClose={onClose}>
        <ModalHeader className="londrina_solid">{recipe.title}</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-2 rounded-xl shadow-lg"
            />
            <p className="fraunces text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
              Cookingtime: {recipe.readyInMinutes}
            </p>
            <p className="fraunces text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
              Servings: {recipe.servings}
            </p>
            <p className="fraunces text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
              Pricerange: {pricePerServing(recipe.pricePerServing)}
            </p>
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

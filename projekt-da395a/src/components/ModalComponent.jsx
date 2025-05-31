
"use client";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useRouter } from 'next/navigation'

export function ModalComponent({ show, onClose, recipe }) {
  
const router = useRouter();
  return (
    <>
      
      <Modal show={show} onClose={onClose}>
        <ModalHeader>{recipe.title}</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <img src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                    />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
              Cookingtime: {recipe.readyInMinutes} 
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
            Servings: {recipe.servings} 
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mr-5 inline">
            Cheap: {recipe.cheap ? "Cheap" : "Not cheap"}
            </p>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            
            </div>
            {/*https://www.geeksforgeeks.org/reactjs-dangerouslysetinnerhtml-attribute/*/}
          
        </ModalBody>
        <ModalFooter>
           <Button 
                    color="green"
                    className="hover:cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();  //Detta hindrar att modalen öppnas upp istället
                    router.push(`/recipe/${recipe.id}`);
                    }}>Visa recept</Button>
          <Button color="light" 
          className="hover:cursor-pointer"
          onClick={onClose}>Stäng</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

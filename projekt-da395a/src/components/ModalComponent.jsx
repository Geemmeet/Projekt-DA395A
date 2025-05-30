
"use client";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

export function ModalComponent({ show, onClose, recipe }) {
  

  return (
    <>
      
      <Modal show={show} onClose={onClose}>
        <ModalHeader>{recipe.title}</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {recipe.summary}
            </p>
            
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="light" 
          className="hover:cursor-pointer"
          onClick={onClose}>Stäng</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

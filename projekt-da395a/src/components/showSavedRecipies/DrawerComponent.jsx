
"use client";

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import ShowSavedRecipies from "./ShowSavedRecipies";


export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show saved recipies</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <DrawerHeader title="Saved recipies" />
        <DrawerItems>
            
          
          <div className="flex flex-row">
            <ShowSavedRecipies />
            
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}

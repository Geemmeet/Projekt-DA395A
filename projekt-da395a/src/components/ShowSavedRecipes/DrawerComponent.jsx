"use client";

import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import ShowSavedRecipes from "./ShowSavedRecipes";

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <a
          className="inline-flex hover:cursor-pointer"
          onClick={() => setIsOpen(true)}>
          Saved recipes
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
          </svg>
        </a>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <DrawerHeader title="Saved recipes" />
        <DrawerItems>
          <div className="flex flex-row m-5">
            <ShowSavedRecipes />
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}

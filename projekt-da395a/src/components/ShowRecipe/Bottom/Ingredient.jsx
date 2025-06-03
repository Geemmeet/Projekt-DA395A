import {ListItem } from "flowbite-react";

export default function Ingredient ({name, amount, unit}) {
    return (
    
      <ListItem className="pb-3 sm:pb-4" key={name}>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{name.replace(/^./, char => char.toUpperCase())}</p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{amount} {unit}</div>
        </div>
      </ListItem>
    
  );
}
import { ListItem } from "flowbite-react";

export default function Instruction ({number, instruction}) {
    return (
    
      <ListItem className="pb-3 sm:pb-4" key={number}>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {number}.{instruction.replace(/^./, char => char.toUpperCase())}
            </p>
          </div>
          <div className="inline-flex text-base font-light text-gray-900 dark:text-white">{number}. {instruction}</div>
        </div>
      </ListItem>
    
  );
}
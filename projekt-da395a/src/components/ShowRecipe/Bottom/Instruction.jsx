import { ListItem } from "flowbite-react";

export default function Instruction({ number, instruction }) {
  return (
    <ListItem className="pb-3 sm:pb-4" key={number}>
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="inline-flex text-base font-light text-gray-900 dark:text-white">
          <span className="font-extrabold me-2"> {number}.</span>{" "}
          <span> {instruction}</span>
        </div>
      </div>
    </ListItem>
  );
}

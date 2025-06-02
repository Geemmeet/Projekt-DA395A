'use client'
import { getRecipie } from "@/lib/localstorageFunctionality/getRecipie"
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useRouter } from 'next/navigation'




//https://blog.logrocket.com/using-localstorage-react-hooks/


export default function ShowSavedRecipies() {
  const router = useRouter()
  // nuvarande lista: showItems och funktion som uppdaterar den: setShowItems
  const [showItems, setshowItems] = useState([]);


  useEffect(() => {
    // storing recept items 
    const items = getRecipie() // hämta befintlig lista av sparade recept
    setshowItems(items); //spara dessa
  }, []);



  const removeRecipe = (idToRemove) => {
    const updatedList = showItems.filter(item => item.id !== idToRemove);
    setshowItems(updatedList);
    localStorage.setItem("savedRecipies", JSON.stringify(updatedList));
  };

  return (
    <>
      <div>

        {showItems.map((item, index) =>

          <div key={item.id ?? index} //fallback om id saknas
            className="flex flex-col m-5 p-2 hover:cursor-pointer"
            onClick={() => {
              router.push(`/recipe/${item.id}`);
            }}
          >
            <div className="flex justify-between items-center w-full">
            <p className="text-gray-800 hover:text-gray-500">{item.title}</p>
            <a>
              <svg className="w-6 h-6 text-gray-800 dark:text-white hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
            
            <Button 
              className = "mt-2 self-end focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={(e) => {
              e.stopPropagation();
              removeRecipe(item.id)}}> 
              
              <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            </ Button>
          </div></div>
        )}
      </div>

    </>

  )
}
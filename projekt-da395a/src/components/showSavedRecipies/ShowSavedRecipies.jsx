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

  return (
    <>
      <div>

        {showItems.map((item, index) =>

          <div key={item.id ?? index} //fallback om id saknas
            className="inline-flex m-5 p-2 hover:cursor-pointer"
            onClick={() => {
              router.push(`/recipe/${item.id}`);
            }}
          >
            <p className="text-gray-800 hover:text-gray-500">{item.title}</p>
            <a>
              <svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>

            </a>
          </div>
        )}
      </div>

    </>

  )
}
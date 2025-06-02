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

        {showItems.map((item) =>

          <div key={item.id}
            className="inline-flex m-5 p-2 hover:cursor-pointer" 
            onClick={() => {
              router.push(`/recipe/${item.id}`);}}
            >
              {item.title}
            <a>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>

    </>

  )
}
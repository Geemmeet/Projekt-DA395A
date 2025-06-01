'use client'
import { getRecipie } from "@/lib/localstorageFunctionality/getRecipie"
import { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
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

    return(
    <>
    <div>
    <h3>Sparade recept</h3>
    {showItems.map((item)=> 
     
          <div key={item.id}
          className="inline-block m-5 p-2" >{item.title}
          <Button onClick={() => {
              router.push(`/recipe/${item.id}`);
            }}> Go to recipe </Button>
          </div>
        )}
    </div>
    
    </>

)}
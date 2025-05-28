import RecipeFact from "./RecipeFact"

export default function RecipeFacts ({recipeTitle = "Receptnamn", facts = ["4 personer", "30 min", "Medelsvårt", "Middag"]}) {
    return (
        <div className="flex flex-row justify-center content-center flex-wrap-reverse">
            <img 
            src="/FoodPlaceholder.jpg" 
            alt= {recipeTitle} 
            className="me-20 w-100 h-100 object-cover object-center"/>

            <div>
                <h3 className="text-8xl mb-10 text-center">{recipeTitle}</h3>

                <div className="flex flex-wrap justify-evenly">
                    {facts.map((fact) => <div className="bg-green-200 text-lg my-5 mx-1 rounded-[2vw] w-1/3 p-5 text-center">{fact}</div>)}
                </div>

                
            </div>
            
            
        </div>
    

    )
}
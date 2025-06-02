import { saveRecipie } from "@/lib/localstorageFunctionality/saveRecipie";

export default function RecipeFacts({ image, title, facts, recipeId }) {
    const ending = ["servings", "min"]

    return (
        <div className="bg-[#E7E4F7] flex flex-row justify-center content-center flex-wrap-reverse py-10">
            <div classname ="flex col-auto">
            <img
                src={image || '/imageatm.png'}
                alt={title || 'Bilden är inte tillgänglig'}
                className="me-20 w-[350px] h-[350px] object-cover object-center" />

            <a
                className="inline-flex hover:cursor-pointer hover:text-gray-500"
                id={recipeId}
                title={title}
                onClick={() => saveRecipie(recipeId, title)}
            > Save recipie
                <svg className="w-6 h-6 text-gray-800 dark:text-white hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                </svg>

            </a>
</div>


            <div>
                <h3 className="text-4xl mb-10 text-center">{title || 'Titel är inte tillgänglig'}</h3>

                <div className="flex flex-wrap justify-evenly">
                    {facts ? facts.slice(0, 4).map((fact, i) => (
                        <div
                            key={i}
                            className="bg-[#9B92CD] text-lg my-5 mx-1 rounded-[2vw] w-1/3 p-5 text-center"
                        >{typeof fact === "string"
                            ? (fact[0].toUpperCase() + fact.slice(1))
                            : fact} {ending[i] || ""}
                        </div>

                    )) : 'Ej tillgängligt'}

                </div>
            </div>
        </div>
    )
}
export default function RecipeFacts ({image, title, facts}) {

    console.log("BUGG")
    console.log(image)
    console.log(title)
    console.log(facts)
    return (
        <div className="flex flex-row justify-center content-center flex-wrap-reverse">
            <img 
            src= {image || '/imageatm.png'}
            alt= {title || 'Bilden är inte tillgänglig'} 
            className="me-20 w-[350px] h-[350px] object-cover object-center"/>

            <div>
                <h3 className="text-4xl mb-10 text-center">{title || 'Titel är inte tillgänglig'}</h3>

                <div className="flex flex-wrap justify-evenly">
                    {facts ? facts.map(fact => (
                        <div className="bg-green-200 text-lg my-5 mx-1 rounded-[2vw] w-1/3 p-5 text-center">{fact}</div>

                    )) : 'Ej tillgängligt'}
            
                </div>
            </div>
        </div>
    )
}
export default function RecipeFact({facts}) {
    retrun (
        facts.map((fact) => <div className="bg-amber-50">{fact}</div>)
        

    )

}
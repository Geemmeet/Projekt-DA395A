import Instruction from "./Instruction"
import {List} from "flowbite-react";

export default function InstructionList ({instructions}) {
    return (
            <>  
                <div className="flex-col w-100 p-10 m-10">
                    <h4 className="text-3xl mb-8">Instructions</h4> 
                    {instructions && instructions.length > 0 ? (
                    <List unstyled className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                        {instructions.map((instruction) => <Instruction key = {instruction.number} number = {instruction.number} 
                        instruction = {instruction.step} />)} 
                    </List>
                    ) : (
                    <p>Informationen är otillgänglig</p>
                    )}
                </div>
            </>
        );
    }
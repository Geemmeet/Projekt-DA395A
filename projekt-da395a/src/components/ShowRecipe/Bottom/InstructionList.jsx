import Instruction from "./Instruction"
import {List} from "flowbite-react";

export default function InstructionList ({instructions}) {
    return (
            <>  
                <div className="flex-col w-100 pt-20">
                    <h4 className="text-3xl mb-8">Instructions</h4> 
                    {instructions && instructions.length > 0 ? (
                    <List unstyled className="max-w-md 60-w-lg divide-y divide-gray-200 dark:divide-gray-700">
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
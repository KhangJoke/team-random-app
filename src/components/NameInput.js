import { Button, Input } from "antd";
import React from "react";


export default function NameInput({inputValue, nameList, setInputValue, setNameList, setTeam}) {


    const onValueChange = (e) => {
        setInputValue(e.target.value)
    }



    const handleRandomize = () => {
        if (!inputValue.trim()) {
            console.error("Input is empty! Please enter some names.");
            return;
        }
        const nameInputList = inputValue.split(/[\n,]+/).map((name) => name.trim()).filter((name) => name);
        
        setNameList([...nameInputList]);
        
        const shuffleList = [...nameList]
        for (let i = 9; i > 0; i--) {
            const j = Math.floor(Math.random() * (1 + i));
            [shuffleList[i], shuffleList[j]] = [shuffleList[j], shuffleList[i]]
        }

        const team1 = shuffleList.slice(0, 5);
        const team2 = shuffleList.slice(5);
        
        setTeam(team1, team2);

    }



    return(
        <div>
            <Input.TextArea value={inputValue} onChange={(e) => onValueChange(e)}></Input.TextArea>
            <Button className="m-1" onClick={handleRandomize}>Random</Button>
        </div>
    )
}
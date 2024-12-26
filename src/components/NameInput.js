import { Button, Input } from "antd";
import React from "react";

export default function NameInput({
  inputValue,
  nameList,
  setInputValue,
  setNameList,
  setTeam,
}) {
  const onValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRandomize = () => {
    if (!inputValue.trim()) {
      console.error("Input is empty! Please enter some names.");
      return;
    }

    const nameInputList = inputValue
      .split(/[\n,]+/)
      .map((name) => name.trim())
      .filter((name) => name);
    console.log(nameInputList);
    for (let i = 9; i > 0; i--) {
      const j = Math.floor(Math.random() * (1 + i));
      [nameInputList[i], nameInputList[j]] = [
        nameInputList[j],
        nameInputList[i],
      ];
    }

    console.log(nameInputList);

    const team1 = nameInputList.slice(0, 5);
    const team2 = nameInputList.slice(5);

    setTeam(team1, team2);
  };

  return (
    <div>
      <Input.TextArea
        className="max-h-60 min-h-40"
        value={inputValue}
        onChange={(e) => onValueChange(e)}
      ></Input.TextArea>
      <Button
        className="m-1 font-semibold hover:bg-[#feffc6]"
        onClick={handleRandomize}
      >
        RANDOM
      </Button>
    </div>
  );
}

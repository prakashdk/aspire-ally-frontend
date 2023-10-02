import React, { useState } from "react";

import { RadioGroup, Radio, Button, Chip } from "@nextui-org/react";
import Loader from "../../../shared/Loader";

export default function QuizGroup({ handleFinish, quizzes, isLoading }) {
  const length = quizzes.length;
  const [scores, setScores] = useState(Array.from({ length }, () => 0));
  const [selectedOptions, setSelectedOption] = useState(
    Array.from({ length }, () => "")
  );
  const [isExamOver, setIsExamOver] = useState(false);
  const showResults = () => {
    setIsExamOver(true);
  };

  const handleSelected = (index, value) => {
    setSelectedOption((options) => {
      return [...options.slice(0, index), value, ...options.slice(index + 1)];
    });
    const isCorrectAnswer = quizzes?.[index]?.answer === value;
    if (isCorrectAnswer) {
      setScores((scores) => {
        return [...scores.slice(0, index), 10, ...scores.slice(index + 1)];
      });
    } else {
      setScores((scores) => {
        return [...scores.slice(0, index), 0, ...scores.slice(index + 1)];
      });
    }
  };
  if (isLoading) {
    return <Loader label="Please Wait..." />;
  }
  return (
    <div>
      {isExamOver && (
        <div style={{ float: "right", padding: "1%" }}>
          <Chip color="success">{sum(scores)}/50</Chip>
        </div>
      )}
      {quizzes.map((quiz, index) => (
        <Quiz
          selected={selectedOptions[index]}
          handleSelected={handleSelected}
          quiz={quiz}
          index={index}
          isExamOver={isExamOver}
          score={scores[index]}
          answer={quizzes?.[index]?.answer}
        />
      ))}
      <div className="right">
        <div className="p-5">
          <Button color="success" onClick={showResults}>
            Show Results
          </Button>
        </div>
        <div className="p-5">
          <Button disabled={!isExamOver} color="primary" onClick={handleFinish}>
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
}

const Quiz = ({
  selected,
  score,
  answer,
  isExamOver,
  handleSelected,
  quiz,
  index,
}) => {
  const { question, options } = quiz;
  return (
    <div className="p-5">
      <RadioGroup
        value={selected}
        onValueChange={(value) => handleSelected(index, value)}
        label={question}
        isDisabled={isExamOver}
        errorMessage={
          isExamOver
            ? score === 0
              ? `Wrong!. Correct Option is ${answer}: ${options[answer]}`
              : "Correct Answer!"
            : ""
        }
        color={isExamOver ? (score === 0 ? "danger" : "success") : "primary"}
      >
        <Radio value="A">{options.A}</Radio>
        <Radio value="B">{options.B}</Radio>
        <Radio value="C">{options.C}</Radio>
        <Radio value="D">{options.D}</Radio>
      </RadioGroup>
    </div>
  );
};

const sum = (list) => {
  return list.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

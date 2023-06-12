import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions !== null &&
          questions.map((question, i) => {
            return (
              <QuestionItem
                key={i}
                question={question}
                questions={questions}
                setQuestions={setQuestions}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default QuestionList;

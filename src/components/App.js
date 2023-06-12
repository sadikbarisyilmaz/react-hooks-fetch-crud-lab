import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, [page]);

  console.log(page);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm setQuestions={setQuestions} />
      ) : (
        <QuestionList setQuestions={setQuestions} questions={questions} />
      )}
    </main>
  );
}

export default App;

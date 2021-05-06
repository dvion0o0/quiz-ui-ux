import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [quiz_time, setQuiz_time] = useState("");
  const [quiz_questions, setQuiz_questions] = useState("");
  const [quiz_name, setQuiz_name] = useState("");

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3003/getQuiz/demo");
      console.log(response);
      setData(response.data);
      setQuiz_time(response.data.quiz_timer_time);
      setQuiz_questions(response.data.quiz_all_question);
      setQuiz_name(response.data.quiz_name);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        quiz_time,
        quiz_questions,
        quiz_name,
        fetchQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

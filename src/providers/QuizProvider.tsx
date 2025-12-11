import { PropsWithChildren, useContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import questions from '../questions';

export type Question = {
  title: string;
  options: string[];
  correctAnswer: string;
};

type QuizContextType = {
  question?: Question;
  questionIndex: number;
  onNextPress: () => void;
  selectedOption?: string | null;
  setSelectedOption: (option: string | null) => void;
  score?: number;
  totalQuestions: number;
  bestScore?: number;
};

export const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  onNextPress: () => {},
  setSelectedOption: () => {},
  totalQuestions: questions.length,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const isFinished = questionIndex >= questions.length;
  const [bestScore, setBestScore] = useState<number>(0);

  useEffect(() => {
    if (isFinished === true && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinished]);

  const restartQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
  };

  const onNextPress = () => {
    if (isFinished) {
      restartQuiz();
      return;
    }

    if (selectedOption) {
      if (question?.correctAnswer === selectedOption) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNextPress,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  return useContext(QuizContext);
};

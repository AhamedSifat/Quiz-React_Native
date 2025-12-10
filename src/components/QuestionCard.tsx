import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { useState } from 'react';
import Card from './Card';
import { useQuiz } from '../providers/QuizProvider';

export type QuestionCardProps = {
  question: {
    title: string;
    options: string[];
    correctAnswer?: string;
  };
};
const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.title}>
      <View style={{ gap: 5 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;

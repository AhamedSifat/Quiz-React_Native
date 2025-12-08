import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { useState } from 'react';
import Card from './Card';

export type QuestionCardProps = {
  question: {
    title: string;
    options: string[];
    correctAnswer: string;
  };
};
const QuestionCard = ({ question }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Card title={question.title}>
      <View style={{ gap: 5 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={selectedOption === option}
            onPress={() => setSelectedOption(option)}
          />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;

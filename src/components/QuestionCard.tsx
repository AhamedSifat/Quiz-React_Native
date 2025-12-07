import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';
import { useState } from 'react';

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
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>
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
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  question: {
    fontSize: 24,
    fontWeight: '500',
  },
});

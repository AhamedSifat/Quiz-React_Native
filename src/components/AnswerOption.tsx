import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useQuiz } from '../providers/QuizProvider';

type AnswerOptionProps = {
  option: string;
};

const AnswerOption = ({ option }: AnswerOptionProps) => {
  const { selectedOption, setSelectedOption } = useQuiz();
  const isSelected = selectedOption === option;

  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      style={[
        styles.container,
        isSelected && { backgroundColor: '#E1F396', borderColor: '#A3D900' },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    borderRadius: 100,
  },
});

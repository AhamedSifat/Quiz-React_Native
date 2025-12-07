import { View, Text, StyleSheet, Pressable } from 'react-native';

type AnswerOptionProps = {
  option: string;
  isSelected?: boolean;
  onPress: () => void;
};

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
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

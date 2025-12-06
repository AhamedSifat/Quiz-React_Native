import { View, Text, StyleSheet } from 'react-native';

const AnswerOption = () => {
  return (
    <View style={styles.container}>
      <Text>This is an answer option</Text>
    </View>
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

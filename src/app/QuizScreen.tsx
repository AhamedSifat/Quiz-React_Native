import { View, Text, StyleSheet, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import questions from '../questions';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';

const QuizScreen = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const onNextPress = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.page}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Question 1/5</Text>
          </View>

          {question ? (
            <View>
              <QuestionCard question={question} />
              <Text style={styles.time}>20 sec</Text>
            </View>
          ) : (
            <Card title='No question available' />
          )}

          <CustomButton
            onPress={onNextPress}
            title='Next'
            rightIcon={
              <FontAwesome6 name='arrow-right' size={24} color='white' />
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FDFEF4',
  },
  container: {
    backgroundColor: '#FDFEF4',
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: '#005055',
  },

  time: {
    textAlign: 'center',
    color: '#005055',
    marginTop: 15,
    fontWeight: 'bold',
  },
});

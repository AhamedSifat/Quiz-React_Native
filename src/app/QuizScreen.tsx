import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect, use } from 'react';
import QuestionCard from '../components/QuestionCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useQuiz } from '../providers/QuizProvider';

const QuizScreen = () => {
  const {
    question,
    questionIndex,
    onNextPress,
    score,
    totalQuestions,
    bestScore,
  } = useQuiz();

  const [time, setTime] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNextPress();
    }
  }, [time]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.page}>
        <View style={styles.container}>
          <View>
            {question ? (
              <Text style={styles.title}>
                Question {questionIndex + 1}/{totalQuestions}
              </Text>
            ) : (
              <Text style={styles.title}>Quiz Finished</Text>
            )}
          </View>

          {question ? (
            <View>
              <QuestionCard question={question} />
              <Text style={styles.time}>{time} sec</Text>
            </View>
          ) : (
            <Card title='Well done!'>
              <Text>
                correct answers: {score}/{totalQuestions}
              </Text>
              <Text>Your best score: {bestScore}</Text>
            </Card>
          )}

          <CustomButton
            onPress={onNextPress}
            title={question ? 'Next' : 'Restart'}
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

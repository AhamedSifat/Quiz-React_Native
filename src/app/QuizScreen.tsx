import { View, Text, StyleSheet, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const QuizScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.page}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Question 1/5</Text>
          </View>

          <View>
            <QuestionCard />
            <Text style={styles.time}>20 sec</Text>
          </View>

          <Pressable
            onPress={() => console.warn('pressed')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
            <FontAwesome6
              name='arrow-right'
              size={24}
              color='white'
              style={styles.buttonIcon}
            />
          </Pressable>
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
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: 'absolute',
    right: 20,
  },
});

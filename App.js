import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import WinnerGuesser from './components/WinnerGuesser';

export default function App() {
  let teams = [
    'Man. City',
    'Benfica',
    'Inter',
    'Chelsea',
    'Bayern',
    'Real Madrid',
    'Milan',
    'Napoli'
  ]
  return (
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text style={styles.title} numberOfLines={2}>
          Champions League {'\n'} Winner Guesser
        </Text>
      </View>
      <WinnerGuesser players={teams}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001651',
  },
  title_view: {
    padding: 50,
    flex: .4,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30
  }
});

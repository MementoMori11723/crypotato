import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Home from './src/Screens/Home';
import CoinDetailedScreens from './src/Screens/coinDetailedScreens';


export default function App() {
  return (
    <View style={styles.container}>
      {/*<CoinDetailedScreens/>*/}
      <Home/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop : 50,
    paddingLeft : 10
  },
});

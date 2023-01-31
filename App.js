import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import Navigator from './src/navigation';


export default function App() {
  return (
    <NavigationContainer theme={{colors:'#121212'}}>
          <View style={styles.container}>
            <Navigator/>
            <StatusBar style="light" />
          </View>
    </NavigationContainer>
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

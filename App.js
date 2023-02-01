import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import Navigator from './src/navigation';


export default function App() {
  return (
    <NavigationContainer theme={{colors:'#121212'}}>
          <View style={styles.container}>
          <Text style={{color:'white', fontSize:45, fontWeight:'bold', padding:15}}>
            Crypto Predictor
          </Text>
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

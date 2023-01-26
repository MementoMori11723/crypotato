import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import Coinitem from './src/components/coinitems';
import cryptocurrencies from './assets/data/cryptocurrencies.json'


export default function App() {
  return (
    <View style={styles.container}>
     <FlatList 
     data = {cryptocurrencies}
     renderItem={({item}) => <Coinitem marketCoin = {item}/>}
     keyExtractor={item => item.id}
     />
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

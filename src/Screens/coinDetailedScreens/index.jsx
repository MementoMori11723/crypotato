import { React, useState } from 'react';
import { Text, View } from 'react-native';
import Coin from '../../../assets/data/crypto.json';
import CoinDetailsHeader from './components/CoinDetailsHeder';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import Charts from './components/charts';


const CoinDetailedScreens = () => {
  
  const { image:{ small }, symbol, market_data:{ market_cap_rank, current_price, price_change_percentage_24h }, name, prices } = Coin;

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  const percentageSymbol = price_change_percentage_24h < 0 ? 'caretdown' : 'caretup';


  return (
    <View style={styles.Totalview}>
      <CoinDetailsHeader 
        image = { small }  
        symbol = { symbol } 
        marketCapRank = { market_cap_rank } 
      />
      <View style={styles.itemAline}>
        <View>
         <Text style={styles.textView}>{name}</Text>
         <Text style={styles.currentPrice}>$ {current_price.usd}</Text>
        </View>
        <View style={{ flexDirection:'row', backgroundColor:percentageColor, padding:3, borderRadius:3, paddingVertical:5, justifyContent:'space-between', alignItems:'center' }}>
          <AntDesign name={percentageSymbol} size={12} color={'white'} style = {{paddingRight:5}}/>
          <Text style={styles.percentage}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={{paddingTop:25}}>
      <Charts/>
      </View>
      <View style={{flexDirection:'row', paddingTop:32}}>
      <Text style={{color:'yellow',fontSize:50, paddingRight:15}}>⚠</Text>
      <Text style={{color:'white', fontSize:30, alignSelf:'center'}}>Estimated Price = $ 76568</Text>
      </View>
      <Text style={{color:'white', fontSize:35, paddingTop:20, paddingBottom:10}}>About {symbol}</Text>
      <Text style={{color:'white', fontSize:18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
    </View>
  )
}

export default CoinDetailedScreens

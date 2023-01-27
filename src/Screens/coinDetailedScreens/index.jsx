import React from 'react'
import { Text, View } from 'react-native';
import Coin from '../../../assets/data/crypto.json';
import CoinDetailsHeader from './components/CoinDetailsHeder';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const CoinDetailedScreens = () => {
  const { image:{ small }, symbol, market_data:{ market_cap_rank, current_price, price_change_percentage_24h }, name } = Coin;

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'

  const percentageSymbol = price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'

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
    </View>
  )
}

export default CoinDetailedScreens

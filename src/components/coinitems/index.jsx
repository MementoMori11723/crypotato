import React from "react";
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

const coinitem = ({ marketCoin }) => {
  const { name, current_price, market_cap_rank, price_change_percentage_24h, market_cap, image, symbol } = marketCoin;
  const normarcap = (marcap) => {
    if(marcap > 1_000_000_000_000){
      return `${Math.floor(marcap/1_000_000_000_000)} T`
    }if(marcap > 1_000_000_000){
      return `${Math.floor(marcap/1_000_000_000)} B`
    }if(marcap > 1_000_000){
      return `${Math.floor(marcap/1_000_000)} M`
    }if(marcap > 1_000){
      return `${Math.floor(marcap/1_000)} K`
    }
    return marcap
  }
    return(
        <View style ={styles.coincountainer}>
       <Image 
       source = {{uri: image }} 
       style = {{height : 30, width : 30, marginRight: 15, alignSelf: "center" }}
       />
       <View>
         <Text style = {styles.title}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style = {styles.rankcountainer}>
              <Text style = {styles.rank}>{market_cap_rank}</Text>
            </View>
           <Text style = {styles.subText}>{symbol.toUpperCase()}</Text>
           <AntDesign name="caretup" size={16} color="green" style = {{paddingRight:5}}/>
           <Text style = {styles.subText}>{price_change_percentage_24h.toFixed(2)}%</Text>
         </View>
       </View>
       <View style={{marginLeft:'auto', alignItem : 'flex-end'}}>
        <Text style = {styles.title}>{current_price}</Text>
        <Text style = {styles.subText}>MGap {normarcap(market_cap)}</Text>
       </View>
      </View>
    );
}

export default coinitem;
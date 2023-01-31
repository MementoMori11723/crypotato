import React from "react";
import { Text, View, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; 

const CoinDetailsHeader =  (props) =>{
    const { image, symbol, marketCapRank } = props 
    const navigation = useNavigation();
    return(
        <View style={styles.headerContainer}>
            <Ionicons name="chevron-back-sharp" size={30} color="white" onPress={() => navigation.goBack()}/>
            <View style={styles.ticker}>
                <Image source={{ uri:image }} style = {{ width:25, height:25 }}/>
                <Text style={styles.thickerTitle}>{ symbol.toUpperCase() }</Text>
                <View style={styles.rankBackground}>
                    <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>#{ marketCapRank }</Text>
                </View>
            </View>
            <EvilIcons name="user" size={35} color="white" />
        </View>

    );
};

export default CoinDetailsHeader
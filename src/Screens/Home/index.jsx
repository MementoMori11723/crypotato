import React from "react";
import { FlatList } from 'react-native';
import Coinitem from '../../components/coinitems';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json'

const Home = () => {
    return(
        <FlatList 
        data = {cryptocurrencies}
        renderItem={({item}) => <Coinitem marketCoin = {item}/>}
        keyExtractor={item => item.id}
        />
    );
};

export default Home;
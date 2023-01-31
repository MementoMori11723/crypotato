import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screens/Home';
import CoinDetailedScreens from '../Screens/coinDetailedScreens'

const stack = createNativeStackNavigator();

const Navigator = () =>{
    return(
        <stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <stack.Screen name = {"Home"} component={ Home }/>
            <stack.Screen name = {"Coin Details"} component={ CoinDetailedScreens }/>
        </stack.Navigator>
    )
};

export default Navigator;
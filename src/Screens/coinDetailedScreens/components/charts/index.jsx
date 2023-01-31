import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryGroup, VictoryLine }  from "victory-native";
 
const Charts = () =>{
    const data = {
        Top:[20,40,30,90,10,60,100,80],
        Bottom:[92,74,33,9,10,0,1,80]

    }
    return (
        <View>
            <VictoryChart>
                <VictoryGroup>
                    <VictoryLine data={data.Top}/> 
                    <VictoryLine data={data.Bottom}/> 
                </VictoryGroup>
            </VictoryChart>
        </View>
    );
};

export default Charts;
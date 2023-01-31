import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryGroup, VictoryBar }  from "victory-native";
 
const Charts = () =>{
    return (
        <View>
            <VictoryChart>
                <VictoryGroup>
                    <VictoryBar/>
                    <VictoryBar/>
                </VictoryGroup>
            </VictoryChart>
        </View>
    );
};

export default Charts;
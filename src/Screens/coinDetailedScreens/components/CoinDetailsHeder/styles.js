import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer:{ 
        flexDirection: 'row', 
        paddingHorizontal: 5, 
        alignItems: 'center',
        justifyContent:'space-between',
        paddingBottom:20 
    },
    ticker:{
        flexDirection:'row', 
        alignItems:'center'
    },
    thickerTitle:{
        color:'white', 
        fontWeight:'bold', 
        marginHorizontal:7, 
        fontSize:20
    },
    rankBackground:{
        backgroundColor:'#585858',
        paddingHorizontal:5,
        paddingVertical:2,
        borderRadius:5
    },
    new:{}
});

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    currentPrice:{
        color:'white', 
        fontSize:48, 
        fontWeight:'bold', 
        letterSpacing:3
    },
    Totalview:{
        paddingHorizontal:10
    },
    textView:{
        color:'white', 
        fontSize:20
    },
    itemAline:{
        padding:15, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    percentage:{
        color:'white', 
        fontSize:18, 
        fontWeight:'500'
    },
    input:{
        flex:1,
        height:40,
        margin:12,
        borderBottomWidth:1,
        borderBottomColor:'white',
        padding:10,
        fontSize:16,
        color:'white'
    }
});

export default styles
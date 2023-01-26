import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
    },
    subText:{
      color:'white',
      marginRight: 10
    },
    coincountainer:{
      flexDirection:'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#454545',
      padding: 15,
    },
    rank:{
      fontWeight: 'bold',
      color: 'white',
    },
    rankcountainer:{
      backgroundColor:'#585858',
      paddingHorizontal:3,
      borderRadius:3,
      marginRight:7,
    }
  });

  export default styles
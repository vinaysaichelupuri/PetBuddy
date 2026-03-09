import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    image:{
        height:100,
        width:100,
        borderRadius:20
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
        height:"20%"
    },
    input: {
        width: '90%',
        height:"6%",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: '5%',
        marginVertical: '2%',
        backgroundColor: '#fff',
        color: '#000',
        marginHorizontal:20
      },
      submitContainer:{
        width: '90%',
        height: '6%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#32CD32',
        borderRadius:10,
        marginHorizontal:20
      },
      text:{
        color:"white",
        fontFamily:"bold",
        fontSize:18
      },
      login: {
        marginTop: '3%',
      },
      loginText: {
        color: '#32CD32',
        fontSize: 18,
      },
})
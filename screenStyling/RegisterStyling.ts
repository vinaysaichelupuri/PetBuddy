import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white"
    },
    image:{
        height:100,
        width:100,
        borderRadius:20
    },
    imageContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
        width: '90%',
        height: '9%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: '5%',
        marginVertical: '2%',
        backgroundColor: '#fff',
        color: '#000',
      },
      inputContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      submitContainer:{
        width: '90%',
        height: '8%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#32CD32',
        borderRadius:10
      },
      text:{
        color:"white",
        fontFamily:"bold",
        fontSize:18
      },
      footerContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        height:"13%",
      },
      login: {
        marginTop: '3%',
      },
      loginText: {
        color: '#32CD32',
        fontSize: 18,
      },
})
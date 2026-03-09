import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        height:50,
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    image:{
        height:30,
        width:30,
        marginLeft:10,
        marginRight:15
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#32CD32",
        marginRight:30,
        padding:10,
        borderRadius:20
    },
    text:{
        fontSize:20,
        fontFamily:"bold",
        fontWeight:"700"
    }


})
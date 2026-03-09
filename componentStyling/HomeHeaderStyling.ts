import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height:110,
        width:'100%',
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#32CD32",
        alignItems:"flex-end",
        justifyContent:"space-between"
    },
    image:{
        height:50,
        width:50,
        marginRight:20,
        marginBottom:10,
        borderRadius:10
    },
    name:{
        color:"white",
        fontSize:18,
        fontFamily:"bold",
        marginBottom:30,
        marginLeft:20,
        fontWeight:"500"
    }
})
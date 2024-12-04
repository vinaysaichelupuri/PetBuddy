import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        borderRadius: 10,
    },
    profileImage: {
        width: "100%",
        height: 250,
        marginBottom: 10,
    },
    greeting: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    infoContainer: {
        alignItems: 'center',
        marginVertical: 20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    signOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    signOutText: {
        color: '#d9534f',
        marginLeft: 5,
    },
    contactContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    contactText: {
        fontSize: 16,
        color: '#333',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuIcon: {
        width: 25,
        height: 25,
        marginRight: 15,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    arrowIcon: {
        width: 15,
        height: 15,
    },
});
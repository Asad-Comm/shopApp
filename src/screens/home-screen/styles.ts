import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/metrics";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A1478',
        paddingHorizontal: 20,
    },
    body:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.25
    },
    icon: {
        height: SCREEN_WIDTH * 0.06,
        width: SCREEN_WIDTH * 0.06,
        resizeMode: 'contain',
        tintColor:'white'
    },
    chat: {
        height: SCREEN_WIDTH * 0.25,
        width: SCREEN_WIDTH * 0.25,
        resizeMode: 'contain',
        tintColor: "#06E9F3",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SCREEN_HEIGHT * 0.08,
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    startFirst: {
        fontSize: 12,
        marginTop: 15
    },
    areYouReady: {
        fontSize: 12,
        marginTop: 15,
        textAlign: 'center',
        color: "gray"
    },
    startNow: {
        fontSize: 14,
        marginTop: 25,
        color: "#06E9F3",
    },
    addChat: {
        width: SCREEN_WIDTH * 0.15,
        height: SCREEN_WIDTH * 0.15,
        backgroundColor: "#06E9F3",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (SCREEN_WIDTH * 0.15)/2,
        right: 10,
        bottom: 20
    },
    setPassword: {
        color: "black"
    },
    fabView:{
        position: "absolute",
        right: 0,
        bottom: 0
    },
    lock: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
        backgroundColor: "#ccc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (SCREEN_WIDTH * 0.1)/2,
        right: -5,
        bottom: 40
    },
});

export default styles;
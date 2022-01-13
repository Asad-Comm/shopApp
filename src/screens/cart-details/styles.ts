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
    },
    chat: {
        height: SCREEN_WIDTH * 0.25,
        width: SCREEN_WIDTH * 0.25,
        resizeMode: 'contain',
        marginBottom: 30
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
        color: "#06E9F3",
        marginTop: 5
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
    setPasswordBtn: {
        width: SCREEN_WIDTH * 0.5,
        backgroundColor: "#06E9F3",
        height: SCREEN_HEIGHT * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: SCREEN_HEIGHT * 0.15,
        alignSelf: 'center'
    },
    setPassword: {
        color: "black"
    }
});

export default styles;
import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/metrics";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A1478',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    body:{

    },
    icon: {
        height: SCREEN_WIDTH * 0.06,
        width: SCREEN_WIDTH * 0.06,
        resizeMode: 'contain',
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
    title: {
        fontSize: 18,
        marginTop: 15
    },
    message: {
        fontSize: 14,
        marginTop: 15
    },
    setPasswordBtn: {
        width: SCREEN_WIDTH * 0.8,
        backgroundColor: "#06E9F3",
        height: SCREEN_HEIGHT * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: SCREEN_HEIGHT * 0.15
    },
    setPassword: {
        color: "black"
    }
});

export default styles;
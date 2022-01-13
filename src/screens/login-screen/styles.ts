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
        marginTop: SCREEN_HEIGHT * 0.15
    },
    icon: {
        height: SCREEN_WIDTH * 0.06,
        width: SCREEN_WIDTH * 0.06,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 25,
    },
    trusted: {
        fontSize: 13,
        marginTop: 15,
        textAlign: 'center',
    },
    reportText: {
       fontSize: 14
    },
    unlockText: {
        fontSize: 14
     },
    setPassword: {
        color: "black"
    },
    fabView:{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#282A36",
        height: SCREEN_HEIGHT * 0.08,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    input:{
        color: 'white',
        fontFamily: fonts.poppins.regular,
        fontSize: 16,
        width: SCREEN_WIDTH * 0.76,
        paddingVertical: 0,
        height: SCREEN_HEIGHT * 0.06,
        marginRight: 5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 14,
        borderWidth: 1,
        borderColor:"#fff",
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.07,
        borderRadius: 5,
        marginTop: SCREEN_HEIGHT * 0.2
    },
});

export default styles;
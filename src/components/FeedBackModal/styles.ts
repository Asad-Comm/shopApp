import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import  * as metrics from "../../utils/metrics";

const { vh, vw } = metrics;

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: 25 * vw,
        height: 4 * vh,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5 * vw
    },
    counterText:{
        marginHorizontal: 0.8 * metrics.vw,
        color: 'black'
    },
    mainImage: {
        height: metrics.vh * 60,
        width: metrics.vw * 100,
        resizeMode: 'cover'
    },
    counterButton: {
        height: 3.5 * vh,
        width: 3.5 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2 * vh,
        borderColor: '#ccc',
        borderRadius: (3.5 / 2) * vh

    },
    input:{
        color: 'white',
        fontFamily: fonts.poppins.regular,
        fontSize: 16,
        width: metrics.SCREEN_WIDTH * 0.76,
        paddingVertical: 0,
        height: metrics.SCREEN_HEIGHT * 0.06,
        marginRight: 5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 14,
        borderWidth: 1,
        borderColor:"#fff",
        width: metrics.SCREEN_WIDTH  * 0.9,
        height: metrics.SCREEN_HEIGHT  * 0.07,
        borderRadius: 5,
        marginTop: 20
    },
    startNow: {
        fontSize: 20,
        marginTop: 25,
        color: "white",
    },
})
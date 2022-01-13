import { StyleSheet } from "react-native";
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

    }
})
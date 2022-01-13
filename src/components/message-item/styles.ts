import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/metrics";


const styles = StyleSheet.create({
    ownContainer: {
        marginVertical: 10,
        paddingHorizontal: 14,
    },
    otherContainer: {
        marginVertical: 10,
        paddingHorizontal: 14,
        alignItems: 'flex-end',
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH * 0.23,
    },
    name: {
        color: '#06E9F3',
        fontSize: 15
    },
    text: {
        marginVertical: 5
    },
    days: {
        color: '#06E9F3',
        fontSize: 13
    },
    time: {
        fontSize: 13
    },
    slider: {
        width: SCREEN_WIDTH * 0.3,
    },
    sliderContainer: {
        backgroundColor: '#0A1478',
        flexDirection: 'row',
        height: SCREEN_HEIGHT * 0.1,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginVertical: 10,
        width: SCREEN_WIDTH * 0.73
    },
    playIcon: {
        height: SCREEN_WIDTH * 0.1,
        width: SCREEN_WIDTH * 0.1,
        resizeMode: 'contain',
    },
    separator: {
        width: 2,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 15,
        height: SCREEN_HEIGHT * 0.075
    },
    shareIcon: {
        height: SCREEN_WIDTH * 0.08,
        width: SCREEN_WIDTH * 0.08,
        resizeMode: 'contain',
    },
    sliderView: {
        alignItems: 'center'
    },
    imageText: {
        width: SCREEN_WIDTH * 0.3,
        marginBottom: 5,
        fontSize: 15
    },
});

export default styles;
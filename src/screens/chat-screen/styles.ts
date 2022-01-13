import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/metrics";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0803E3'
    },
    icon: {
        height: SCREEN_WIDTH * 0.07,
        width: SCREEN_WIDTH * 0.07,
        resizeMode: 'contain',
        marginHorizontal: 10
    },
    clock: {
        height: SCREEN_WIDTH * 0.03,
        width: SCREEN_WIDTH * 0.03,
        resizeMode: 'contain',
        marginRight: 6
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SCREEN_HEIGHT * 0.08,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    headerRight:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 18,
        marginLeft: 5
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    footerRight:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    days:{
        paddingHorizontal: 16,
        borderRadius: 15,
        backgroundColor: "#06E9F3",
        paddingVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input:{
        color: 'white',
        fontFamily: fonts.poppins.regular,
        fontSize: 14,
        width: SCREEN_WIDTH * 0.8,
        textAlignVertical: "top"
    },
    footerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 14
    },
    footerContainer:{
        paddingVertical: 10,
        backgroundColor: "#0A1478"
    }
});

export default styles;
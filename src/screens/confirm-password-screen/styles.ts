import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/metrics";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A1478',
        alignItems: 'center'
    },
    icon: {
        height: SCREEN_WIDTH * 0.07,
        width: SCREEN_WIDTH * 0.07,
        resizeMode: 'contain',
        marginHorizontal: 10
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SCREEN_HEIGHT * 0.08,
        alignItems: 'center',
        paddingHorizontal: 10,
        width: SCREEN_WIDTH,
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
        marginLeft: 10
    },
    headerRightText:{
        color: "#06E9F3"
    },

    input:{
        color: 'white',
        fontFamily: fonts.poppins.regular,
        fontSize: 14,
        width: SCREEN_WIDTH * 0.9,
        paddingVertical: 0,
        height: SCREEN_HEIGHT * 0.06
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 14,
        borderWidth: 1,
        borderColor:"#06E9F3",
        width: SCREEN_WIDTH * 0.95,
        height: SCREEN_HEIGHT * 0.07,
        borderRadius: 5,
        marginTop: 20
    },
    rowFulfilled:{
        width: SCREEN_WIDTH * 0.21,
        height: 4,
        backgroundColor: "#06E9F3",
        borderRadius: 5,
        marginRight: 7
    },
    rowUnFulfilled:{
        width: SCREEN_WIDTH * 0.21,
        height: 4,
        backgroundColor: "#ccc",
        borderRadius: 5,
        marginRight: 7
    },
    validationRow: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10
    }
});

export default styles;
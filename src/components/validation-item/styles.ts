import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
    inActiveText: {
        fontSize: 12,
        fontFamily: fonts.poppins.regular,
        color: 'red',
    },
    activeText: {
        fontSize: 12,
        fontFamily: fonts.poppins.regular,
        color: '#06E9F3',
    },
    unFilled: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: 'red',
        marginRight: 10
    },
    filled: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: '#06E9F3',
        marginRight: 10
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    }
});

export default styles;
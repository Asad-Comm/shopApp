import React from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import styles from './styles';

const HomeScreen: React.FC<null> = (props) => {
    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View />
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("CartScreen")}>
                    <Image source={icons.menu} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    }

    return <View style={styles.container}>
        {renderHeader()}
        <TouchableOpacity onPress={() => props.navigation.navigate("QRScreen")} style={styles.body}>
            <Image
                source={icons.qrCode}
                style={styles.chat}
            />
            <TextRegular
                text={"Scan QR of a product"}
                style={styles.startNow}
            />
        </TouchableOpacity>
    </View>
};

export default HomeScreen;
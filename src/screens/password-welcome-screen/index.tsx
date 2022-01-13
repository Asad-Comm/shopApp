import React from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import styles from './styles';

const PasswordWelcomeScreen: React.FC<null> = (props) => {
    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image source={icons.back} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    }

    return <View style={styles.container}>
        <View style={styles.body}>
            {renderHeader()}
            <TextSemiBold
                text={"Set Your Password to\nUnlock Matrix"}
                style={styles.title}
            />
            <TextRegular
                text={"Your password is required each time you access Matrix. Password protection encrypts the data stored in your app and safeguards against unauthorized access to your Matrix account."}
                style={styles.message}
            />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("SetPasswordScreen")} style={styles.setPasswordBtn}>
            <TextSemiBold
                text="Set Password"
                style={styles.setPassword}
            />
        </TouchableOpacity>
    </View>
};

export default PasswordWelcomeScreen;
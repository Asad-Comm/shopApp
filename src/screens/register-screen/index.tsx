import React, { useState } from 'react';
import { FlatList, Image, TextInput, TouchableOpacity, View, } from 'react-native';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import { SCREEN_HEIGHT } from '../../utils/metrics';
import styles from './styles';

const RegisterScreen: React.FC<null> = (props) => {
    const [secureTextEntry, setSecureTextEntry] = useState(false);


    const renderReport = (): JSX.Element => {
        return <View style={styles.fabView}>
            <TouchableOpacity>
                <TextRegular text="Report Issue" style={styles.reportText} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("PasswordWelcomeScreen")}>
                <TextRegular text="Unlock" style={styles.unlockText} />
            </TouchableOpacity>
        </View>
    }

    const onEyePress = () => {
        setSecureTextEntry(!secureTextEntry);
    }

    const renderEye = (): JSX.Element => {
        return <TouchableOpacity onPress={onEyePress}>
            <Image source={secureTextEntry ? icons.eyeClose : icons.eyeOpen} style={styles.icon} />
        </TouchableOpacity>
    }

    return <View style={styles.container}>
        <View style={styles.body}>
            <TextRegular
                text={"Sign Up"}
                style={styles.title}
            />
            {/* <TextRegular
                text={"Trusted for data and privacy protection"}
                style={styles.trusted}
            /> */}
        </View>

        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                style={styles.input}
                placeholderTextColor="gray"
            />
        </View>
        <View style={[styles.inputContainer,{        marginTop: 10
}]}>

            <TextInput
                placeholder="Password"
                style={styles.input}
                placeholderTextColor="gray"
                secureTextEntry={secureTextEntry}
            />
            {renderEye()}
        </View>
        <View style={[styles.inputContainer,{        marginTop: 10
}]}>

            <TextInput
                placeholder="Confirm Password"
                style={styles.input}
                placeholderTextColor="gray"
                secureTextEntry={secureTextEntry}
            />
            {renderEye()}
        </View>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("LoginScreen")
        }} style={styles.setPasswordBtn}>
            <TextSemiBold
                text="Sign Up"
                style={styles.setPassword}
            />
        </TouchableOpacity>
        {/* {renderReport()} */}
    </View>
};

export default RegisterScreen;
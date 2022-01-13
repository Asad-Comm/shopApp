import React, { useState } from 'react';
import { FlatList, Image, TextInput, TouchableOpacity, View, } from 'react-native';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import styles from './styles';

const LoginScreen: React.FC<null> = (props) => {
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
            <Image source={secureTextEntry ? icons.eyeOpen : icons.eyeClose} style={styles.icon} />
        </TouchableOpacity>
    }

    return <View style={styles.container}>
        <View style={styles.body}>
            <TextRegular
                text={"Matrix"}
                style={styles.title}
            />
            <TextRegular
                text={"Trusted for data and privacy protection"}
                style={styles.trusted}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Unlock Password"
                style={styles.input}
                placeholderTextColor="gray"
                secureTextEntry={secureTextEntry}
            />
            {renderEye()}
        </View>
        {renderReport()}
    </View>
};

export default LoginScreen;
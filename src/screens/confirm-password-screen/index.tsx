import React from 'react';
import { Image, TextInput, TouchableOpacity, View, } from 'react-native';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import PasswordValidationItem from '../../components/validation-item';
import styles from './styles';

const ConfirmPasswordScreen: React.FC<null> = (props) => {
    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image source={icons.back} style={styles.icon} />
                </TouchableOpacity>

                <TextSemiBold text="Confirm Unlock Password" style={styles.headerTitle} />
            </View>

            <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")}>
                    <TextSemiBold text="NEXT" style={styles.headerRightText} />
                </TouchableOpacity>
            </View>
        </View>
    }

    const renderValidations = (): JSX.Element => {
        return <View>
            <View style={styles.validationRow}>
                <View style={styles.rowFulfilled} />
                <View style={styles.rowUnFulfilled} />
                <View style={styles.rowUnFulfilled} />
                <View style={styles.rowFulfilled} />
            </View>


            <PasswordValidationItem text="At least 8 characters" active />
            <PasswordValidationItem text="1 Uppercase letter" />
            <PasswordValidationItem text="1 Numeric character" />
            <PasswordValidationItem text="1 Special character" active />

        </View>
    }

    return <View style={styles.container}>
        {renderHeader()}

        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Unlock Password"
                style={styles.input}
                placeholderTextColor="gray"
            />
        </View>

        {renderValidations()}
    </View>
};

export default ConfirmPasswordScreen;
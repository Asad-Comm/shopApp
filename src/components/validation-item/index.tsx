import React from 'react';
import { Text, TextStyle, View, } from 'react-native';
import styles from './styles';

interface IPasswordValidationProps {
    text?: string,
    active?: boolean
}

const PasswordValidationItem: React.FC<IPasswordValidationProps> = (props) => {
    return <View style={styles.body}>
        <View style={props.active ? styles.filled : styles.unFilled} />
        <Text style={props.active ? styles.activeText : styles.inActiveText}>
            {props.text}
        </Text>
    </View>
};

export default PasswordValidationItem;
import React from 'react';
import { Text, TextStyle, } from 'react-native';
import styles from './styles';

interface ITextProps {
    text?: string,
    style?: TextStyle
}

const TextSemiBold: React.FC<ITextProps> = (props) => {
    return <Text style={[styles.text, props.style]}>
        {props.text}
    </Text>
};

export default TextSemiBold;
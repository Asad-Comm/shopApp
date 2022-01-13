import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import TextRegular from '../text-regular';

export default ({ onChangeCounter, ...props }) => {
    console.log('props.item?.quantity ',props.item?.quantity);
    
    const [counter, setCounter] = useState(props.item?.quantity ?? 1);

    useEffect(() => onChangeCounter(counter), [counter])

    const increment = () => setCounter(counter + 1)

    const decrement = () => setCounter(counter == 1 ? counter : counter - 1)


    return <View style={styles.mainContainer}>
        <TouchableOpacity onPress={decrement} style={styles.counterButton}>
            <TextRegular text='-' style={styles.counterText} />
        </TouchableOpacity>

        <TextRegular text={counter} style={[styles.counterText]} />

        <TouchableOpacity onPress={increment} style={[styles.counterButton, { backgroundColor: '#ccc'}]}>
            <TextRegular text='+' style={[styles.counterText, { color: 'white' }]} />
        </TouchableOpacity>
    </View >
}

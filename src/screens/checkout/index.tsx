import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import {   ActivityIndicator, Alert, TextInput, TouchableOpacity, View, } from 'react-native';
import { useDispatch } from 'react-redux';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import GeneralActions from '../../StateManagement/Actions/general';
import styles from './styles';

const CheckoutScreen: React.FC<null> = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCVV] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onContinue = () => {
        if (name.trim() == '') {
            return Alert.alert("Checkout", "Please enter your name");
        }
        if (number.trim() == '' || number.trim().length < 16) {
            return Alert.alert("Checkout", "Please enter a valid card");
        }
        if (expiry.trim() == '') {
            return Alert.alert("Checkout", "Please enter a valid expiry date");
        }
        if (cvv.trim() == '' || cvv.trim().length < 3) {
            return Alert.alert("Checkout", "Please enter a valid cvv");
        }


        setLoading(true);

        setTimeout(() => {
            dispatch(GeneralActions.clearCart());
            Alert.alert("Purchase Completed");
            props.navigation.dispatch({
                ...CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'HomeScreen',
                        },
                    ],
                }),
            });
        }, 6000);
    }
 

    if (loading) {
        return <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <ActivityIndicator size={"large"} />
        </View>
    }

    return <View style={styles.container}>
        <View style={styles.body}>
            <TextRegular
                text={"Checkout"}
                style={styles.title}
            />
            <TextRegular
                text={"Enter your details"}
                style={styles.trusted}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Name On Card"
                style={styles.input}
                placeholderTextColor="gray"
                onChangeText={setName}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="1111222233334444"
                style={styles.input}
                placeholderTextColor="gray"
                keyboardType='numeric'
                onChangeText={setNumber}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Card Expiry: mm/yy"
                style={styles.input}
                placeholderTextColor="gray"
                // keyboardType='numeric'
                onChangeText={setExpiry}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Card CVV"
                style={styles.input}
                placeholderTextColor="gray"
                keyboardType='numeric'
                onChangeText={setCVV}
            />
        </View>
        <TouchableOpacity onPress={onContinue} style={styles.setPasswordBtn}>
            <TextSemiBold
                text="Continue"
                style={styles.setPassword}
            />
        </TouchableOpacity>
    </View>
};

export default CheckoutScreen;
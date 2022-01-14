import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home-screen';
import ChatScreen from '../screens/chat-screen';
import PasswordWelcomeScreen from '../screens/password-welcome-screen';
import SetPasswordScreen from '../screens/set-password-screen';
import ConfirmPasswordScreen from '../screens/confirm-password-screen';
import LoginScreen from '../screens/login-screen';
import QRScreen from '../screens/qr-scanner-screen';
import ProductDetailScreen from '../screens/product-details';
import CartScreen from '../screens/cart-details';
import CheckoutScreen from '../screens/checkout';
import RegisterScreen from '../screens/register-screen';

const Stack = createStackNavigator();

const RootStack = (): JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="PasswordWelcomeScreen" component={PasswordWelcomeScreen} />
            <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreen} />
            <Stack.Screen name="ConfirmPasswordScreen" component={ConfirmPasswordScreen} />
            <Stack.Screen name="QRScreen" component={QRScreen} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        </Stack.Navigator>
    );
}

const RootNavigator = () => {
    return <NavigationContainer>
        <RootStack />
    </NavigationContainer>
}

export default RootNavigator;
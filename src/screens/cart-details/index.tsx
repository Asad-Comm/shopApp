import React from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { useSelector } from 'react-redux';
import { icons } from '../../assets/images';
import CartItem from '../../components/CartItem';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import styles from './styles';

const CartScreen: React.FC<null> = (props) => {
    const cartState = useSelector(state => state.GeneralReducer.cart);

    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image source={icons.back} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    }

    const renderCartItem = (item) => {
        return <CartItem cartItem={item} key={item.id}/>
    }

    const getTotal = () => {
        let total = 0;

        cartState.map(item => {
            total += parseFloat(item.price) * item.quantity;
        });

        return total;
    }

    return <View style={styles.container}>
        {renderHeader()}
        {cartState.map(renderCartItem)}
        {cartState?.length == 0 && <TextSemiBold text='Add something in cart' style={{textAlign: 'center'}} />}
        {
            cartState?.length > 0 && <TextSemiBold
            text={`Total: ${getTotal()}`}
            style={{color: 'white'}}
        />
        }
        {cartState?.length > 0 && <TouchableOpacity onPress={() => {
            props.navigation.navigate("CheckoutScreen")
        }} style={styles.setPasswordBtn}>
            <TextSemiBold
                text="Checkout"
                style={styles.setPassword}
            />
        </TouchableOpacity>}
    </View>
};

export default CartScreen;
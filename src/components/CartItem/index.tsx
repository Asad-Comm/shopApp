import React from 'react';
import styles from './styles';
import { Image, TouchableOpacity, View } from 'react-native';
import Counter from '../Counter';
import TextSemiBold from '../text-semibold';
import { useDispatch } from 'react-redux';
import GeneralActions from '../../StateManagement/Actions/general';
import TextRegular from '../text-regular';


const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, props.styles]}>

      <Image source={{uri: props.cartItem.url}} style={styles.image} />

      <View style={styles.verticalView}>
        <TextSemiBold numberOfLines={1} text={props.cartItem.title} style={styles.productTitle} />

        <TextSemiBold numberOfLines={1} text={props.cartItem.price + " pkr"} style={styles.productPrice} />
      </View>

      <View style={styles.counterView}>
        <Counter item={props.cartItem} onChangeCounter={(counter) => { 
          dispatch(GeneralActions.updateCartItem({
            ...props.cartItem,
            quantity: counter
          }))
        }} />
      </View>

      <TouchableOpacity 
      onPress={() => {
        dispatch(GeneralActions.removeCartItem(props.cartItem))
      }}
      style={{
        position: 'absolute',
        right: 20,
        top: 10
      }}>
        <TextRegular text='X' style={{color: 'black'}}/>
      </TouchableOpacity>
    </View>
  );
};
export default CartItem;

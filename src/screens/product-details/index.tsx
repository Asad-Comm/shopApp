import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { useDispatch } from 'react-redux';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import GeneralActions from '../../StateManagement/Actions/general';
import styles from './styles';

const ProductDetailScreen: React.FC<null> = (props) => {
    const paramsProduct = props.route?.params?.product;
    const dispatch = useDispatch();

    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image source={icons.back} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    }

    const onAddToCart = () => {
            dispatch(GeneralActions.addToCart(paramsProduct, () => {
                props.navigation.replace("CartScreen")
            }));
    };

    return <View style={styles.container}>
        {renderHeader()}
        <View style={styles.body}>
            <Image
                source={{ uri: paramsProduct?.url }}
                style={styles.chat}
            />
            <TextRegular
                text={`Name: ${paramsProduct?.title}`}
                style={styles.startNow}
            />
            <TextRegular
                text={`Price: ${paramsProduct?.price ?? 0} pkr`}
                style={styles.startNow}
            />
        </View>
        <TouchableOpacity onPress={onAddToCart} style={styles.setPasswordBtn}>
            <TextSemiBold
                text="Add To Cart"
                style={styles.setPassword}
            />
        </TouchableOpacity>
    </View>
};

export default ProductDetailScreen;
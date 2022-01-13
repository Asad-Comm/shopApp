import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef } from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { icons } from '../../assets/images';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import { SCREEN_HEIGHT } from '../../utils/metrics';
import styles from './styles';

const QRScreen: React.FC<null> = (props) => {
    const cameraRef = useRef();
    const isFocused = useIsFocused();

  useEffect(
    useCallback(() => {
      if (isFocused) {
        cameraRef?.current?.reactivate();
      }
    }, [isFocused])
  );

    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image source={icons.back} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View />
        </View>
    }

    const onSuccess = (data) => {
        console.log(data)
        props.navigation.navigate("ProductDetailScreen", { product: data.data });
    }

    return <View style={styles.container}>
        {renderHeader()}
        <QRCodeScanner
            ref={cameraRef}
            onRead={onSuccess}
            cameraStyle={{height: SCREEN_HEIGHT}}
        />
    </View>
};

export default QRScreen;
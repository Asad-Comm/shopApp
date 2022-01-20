import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TextSemiBold from '../text-semibold';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/metrics';
import styles from './styles';


export default ({  visible, onClose, onSubmit, ...props }) => {
   

// alert('modal')
 
return  <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
    <TouchableOpacity onPress={() => onClose()} style={{
        position:'absolute',
        top:0,
        backgroundColor:'rgba(0,0,0,0.5)',
        height:SCREEN_HEIGHT,
        width:SCREEN_WIDTH
    }} />
     <TextSemiBold
                text={"We Would Love To Get Your Feedback"}
                style={styles.startNow}
            />
     <View style={styles.inputContainer}>
            <TextInput
                placeholder="What do you think?"
                style={styles.input}
                onSubmitEditing={onSubmit}
                placeholderTextColor="lightgray"
            />
        </View>
</View> 
}

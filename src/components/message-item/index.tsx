import React from 'react';
import { Image, View } from 'react-native';
import TextRegular from '../text-regular';
import TextSemiBold from '../text-semibold';
import Slider from 'react-native-slider';
import styles from './styles';
import { icons } from '../../assets/images';

export enum mediaTypes {
    audio = 'audio',
    video = 'video',
    image = 'image',
}

export type MessageT = {
    own_message: boolean,
    text?: string,
    mediaType?: mediaTypes | null,
    media?: string | null,
    created_at?: string,
    name: string
}

export interface IMessageProps {
    item?: MessageT
}

const MessageItem: React.FC<IMessageProps> = (props) => {
    const renderSection = (): JSX.Element | null => {
        switch (props.item?.mediaType) {
            case mediaTypes.audio:
                return renderAudioMessage();

            case mediaTypes.image:
                return renderImageMessage();

            default:
                return renderTextMessage();
        }
    }

    const renderTextMessage = (): JSX.Element => {
        return <TextSemiBold text={props.item?.text} style={styles.text} />;
    }

    const renderAudioMessage = (): JSX.Element => {
        return <View style={styles.sliderContainer}>
            <Image source={icons.play} style={styles.playIcon} />
            <View style={styles.separator} />
            <View style={styles.sliderView}>
                <Slider
                    value={0}
                    disabled
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#06E9F3"
                    maximumTrackTintColor="#0803E3"
                    thumbTintColor="#06E9F3"
                    style={styles.slider}
                    animateTransitions
                />
                <TextRegular text="00:00/00:00" />
            </View>
            <View style={styles.separator} />
            <Image source={icons.share} style={styles.shareIcon} />
        </View>;
    }

    const renderImageMessage = (): JSX.Element => {
        return <View style={styles.sliderContainer}>
            <Image source={{ uri: "" }} style={styles.playIcon} />
            <View style={styles.separator} />
            <View>
                <TextRegular text="Image" style={styles.imageText} />
                <TextRegular text="15 kb" />
            </View>
            <View style={styles.separator} />
            <Image source={icons.share} style={styles.shareIcon} />
        </View>;
    }

    return <View style={props.item?.own_message ? styles.ownContainer : styles.otherContainer}>
        <TextRegular text={props.item.name} style={styles.name} />
        {renderSection()}
        <View style={styles.dateRow}>
            <TextRegular text="5d" style={styles.days} />
            <TextRegular text="03:34 PM" style={styles.time} />
        </View>
    </View>
};

export default MessageItem;
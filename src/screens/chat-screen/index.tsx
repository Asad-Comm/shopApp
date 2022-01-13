import React from 'react';
import { FlatList, Image, TextInput, TouchableOpacity, View, } from 'react-native';
import { icons } from '../../assets/images';
import MessageItem, { IMessageProps, mediaTypes, MessageT } from '../../components/message-item';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import styles from './styles';

interface IChatProps {

}

const data: MessageT[] = [
    {
        own_message: true,
        text: "Hi",
        mediaType: null,
        media: null,
        created_at: new Date().toDateString(),
        name: "Ehtesham"
    },
    {
        own_message: false,
        mediaType: mediaTypes.image,
        media: null,
        created_at: new Date().toDateString(),
        name: "Shami"
    },
    {
        own_message: true,
        mediaType: mediaTypes.audio,
        media: null,
        created_at: new Date().toDateString(),
        name: "Ehtesham"
    },
    {
        own_message: false,
        mediaType: mediaTypes.audio,
        media: null,
        created_at: new Date().toDateString(),
        name: "Shami"
    },
    {
        own_message: false,
        mediaType: mediaTypes.image,
        media: null,
        created_at: new Date().toDateString(),
        name: "Shami"
    },
]

const ChatScreen: React.FC<IChatProps> = (props) => {
    const renderItem = ({ item }): JSX.Element => {
        return <MessageItem item={item} />
    }

    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image source={icons.back} style={styles.icon} />
                </TouchableOpacity>

                <TextSemiBold text="Ehtesham" style={styles.headerTitle} />
            </View>

            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <Image source={icons.key} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={icons.vibrate} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.qrCode} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    }

    const renderFooter = (): JSX.Element => {
        return <View style={styles.footerContainer}>
            <View style={styles.footerInput}>
                <TextInput
                    placeholder="Send secure message"
                    style={styles.input}
                    placeholderTextColor="white"
                    multiline
                />
                <TouchableOpacity>
                    <Image source={icons.fullScreen} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <TouchableOpacity style={styles.days}>
                        <Image source={icons.clock} style={styles.clock} />
                        <TextRegular text="5d" />
                    </TouchableOpacity>
                </View>

                <View style={styles.footerRight}>
                    <TouchableOpacity>
                        <Image source={icons.camera} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.mic} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

    return <View style={styles.container}>
        {renderHeader()}
        <FlatList
            data={data}
            renderItem={renderItem}
        />
        {renderFooter()}
    </View>
};

export default ChatScreen;
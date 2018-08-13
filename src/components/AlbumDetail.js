import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from "./Card";
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        headerImageStyle,
        headerContentStyle,
        headerImageContainerStyle,
        headerTextStyle }
        = styles;
    return (
        <Card >
            <CardSection>
                <View style={headerImageContainerStyle}>
                    <Image
                        style={headerImageStyle}
                        source={{ uri: thumbnail_image }}
                    />

                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> Album: {title}
                    </Text>
                    <Text> Artist: {artist} </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.albumArtworkImage} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card >


    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 2
    },

    albumArtworkImage: {
        height: 300,
        flex: 1,
        width: null
    },

    headerTextStyle: {
        fontSize: 21

    },

    headerImageStyle: {
        height: 50,
        width: 50

    },

    headerImageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail; 
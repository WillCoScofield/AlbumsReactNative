import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonStyle} >
            <Text style={styles.textStyle}> {children} </Text>
        </TouchableOpacity >
    )

}

const styles = {
    ButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5

    },

    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10,
    }

}

export default Button;

// import component libraries
import React from 'react';
import { Text, View } from 'react-native';

//make comp

const Header = (props) => {
    const { textStyle, viewStyle} = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
       
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 100,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 20},
        // shadowOpacity: 0.5
        elevation: 2.5,
        position: 'relative'
        
        
    }
}

//export comp
export default Header;

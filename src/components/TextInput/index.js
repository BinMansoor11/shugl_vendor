import React, { useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Metrics, Colors, Images, Fonts } from '../../theme';
// import styles from './styles';


export function CustomTextInput(props) {

    const {
        placeholder,
        customStyle,
        rightButton,
        disabled
    } = props

    return (
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                style={{ ...customStyle, color: Colors.text.primary, }}
                underlineColorAndroid={'rgba(46, 46, 46, 0.4)'}
                placeholder={placeholder ? placeholder : 'Enter Text Here'}
                placeholderTextColor={'rgba(46, 46, 46, 0.4)'}
                editable={!disabled}

            />
            {rightButton &&
                <TouchableOpacity>
                    <Text>sdfs</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

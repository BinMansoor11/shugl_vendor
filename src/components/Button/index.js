import React, { useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Metrics, Colors, Images, Fonts, Icons } from '../../theme';
import styles from './styles';


export function Button(props) {

    const {
        height,
        width,
        title,
        fontWeight,
        fontSize,
        onPress,
        style,
        radius,
        color,
        border,
        icon
    } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.container,
                ...style,
                backgroundColor: border ? '#fff' : color ? color : Colors.primary,
                height: height,
                borderRadius: radius ? radius : Metrics.ratio(21),
                width: width,
                borderWidth: border ? 1 : 0,
                borderColor: border ? Colors.primary : 'transparent'
            }}>
            {icon ?
                <Icons.Entypo name='location-pin' color='#fff' size={Metrics.ratio(21)} />
                : <Text style={{
                    color: border ? Colors.primary : '#fff',
                    fontWeight: fontWeight ? fontWeight : 'normal',
                    fontSize: fontSize ? fontSize : Metrics.ratio(14)
                }}>
                    {title}
                </Text>}
        </TouchableOpacity>
    )
}

import React, { useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Metrics, Colors, Images, Fonts, Icons } from '../../theme';
import styles from './styles';


export function Footer(props) {
    const { children } = props
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {children}
            <View style={styles.container}>
                {/* {
                    [2, 2, 2, 2, 2, 2].map(() => {
                        return <TouchableOpacity style={styles.left}>
                            <Icons.AntDesign name='user' color='#fff' size={Metrics.ratio(20)} />
                        </TouchableOpacity>
                    })
                } */}

                <TouchableOpacity style={styles.left}>
                    <Icons.AntDesign name='search1' color='#fff' size={Metrics.ratio(20)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.left}>
                    <Icons.AntDesign name='filetext1' color='#fff' size={Metrics.ratio(20)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.left}>
                    <Icons.AntDesign name='printer' color='#fff' size={Metrics.ratio(20)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.left}>
                    <Icons.MaterialIcons name='notifications-none' color='#fff' size={Metrics.ratio(20)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.left}>
                    <Icons.AntDesign name='hearto' color='#fff' size={Metrics.ratio(20)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.left}>
                    <Icons.AntDesign name='user' color='#fff' size={Metrics.ratio(20)} />
                </TouchableOpacity>


            </View>
        </View>
    )
}

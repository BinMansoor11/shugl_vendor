import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import {
    Header,
    Button,
    CustomText,
    Separator,
    CustomTextInput,
    VenueCard,
    Footer,
    CheckBox
} from '../../components'
import { Metrics, Colors, Images, Fonts, Icons } from '../../theme';

export function Comps() {
    return (
        <Footer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header />

                <CustomText
                    // style={{ marginLeft: 10 }}
                    fontSize={Metrics.ratio(18)}
                    // fontWeight='normal'
                    title={'Home Screen in login'}
                />

                <Separator />

                <Button
                    onPress={() => null}
                    fontWeight='bold'
                    height={Metrics.ratio(35)}
                    width={Metrics.screenWidth * 0.4}
                    fontSize={Metrics.ratio(16)}
                    title='text'
                />

                <CustomTextInput
                    customStyle={{ width: Metrics.screenWidth * 0.4 }}
                />

                <VenueCard />

                <CheckBox />

            </View>
        </Footer >
    )
}


export default function Login({ navigation, route }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <ImageBackground style={{
                height: Metrics.screenHeight * 0.5
            }}
                source={require('../../assets/images/login.png')}
            >
                <View style={{ paddingLeft: Metrics.ratio(25), position: 'absolute', bottom: 10, height: Metrics.screenHeight * .2, justifyContent: 'space-around' }}>
                    <Separator align='flex-start' color='#fff' width={Metrics.screenWidth * .15} height={Metrics.ratio(1)} />
                    <CustomText
                        style={{}}
                        fontSize={Metrics.ratio(28)}
                        fontWeight='normal'
                        color='#fff'
                        title={'Welcome'}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <CustomText
                            style={{}}
                            fontSize={Metrics.ratio(28)}
                            fontWeight='normal'
                            color='#fff'
                            title={'to'}
                        />
                        <CustomText
                            style={{ marginLeft: 10 }}
                            fontSize={Metrics.ratio(28)}
                            fontWeight='bold'
                            color='#fff'
                            title={'SHUGL'}
                        />
                    </View>
                </View>

            </ImageBackground>


            <View style={{ marginBottom: Metrics.screenHeight * 0.05 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:
                        'space-between',
                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center',
                    height: Metrics.screenHeight * 0.13

                }}>
                    <Icons.Feather name='user' size={Metrics.ratio(20)} />
                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Phonenumber/Email/Username'
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:
                        'space-between',
                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>
                    <Icons.Feather name='lock' size={Metrics.ratio(20)} />
                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Password'
                    />
                </View>
            </View>
            <Button
                onPress={() => null}
                height={Metrics.ratio(55)}
                width={Metrics.screenWidth * 0.8}
                fontSize={Metrics.ratio(16)}
                title='SIGN IN'
                style={{ alignSelf: 'center', }}
                radius={Metrics.ratio(55)}
            />

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CustomText
                    // style={{ marginLeft: 10 }}
                    fontSize={Metrics.ratio(15)}
                    color='rgba(46, 46, 46, 0.4)'
                    // fontWeight='normal'
                    title={'Don’t have an account?'}
                />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <CustomText
                        style={{ marginLeft: Metrics.ratio(30) }}
                        fontSize={Metrics.ratio(16)}
                        color={Colors.primary}
                        fontWeight='bold'
                        title={'SIGN UP'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

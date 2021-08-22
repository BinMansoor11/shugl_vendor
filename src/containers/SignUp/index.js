import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
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


export default function SignUp({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: Metrics.screenHeight * 0.85 }}>
                <Header heading='Sign Up' />
                <View style={{

                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center',
                    marginTop: Metrics.screenHeight * 0.07
                    // height: Metrics.screenHeight * 0.13

                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Username'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Password'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Confirm Password'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Mobile Number'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Email Address'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='City'
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.6,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.35 }}
                        placeholder='Profile Photo'
                        disabled
                    />
                    <Button
                        onPress={() => null}
                        height={Metrics.ratio(25)}
                        width={Metrics.screenWidth * 0.25}
                        fontSize={Metrics.ratio(10)}
                        title='Upload Picture'
                        style={{ alignSelf: 'center', }}
                        radius={Metrics.ratio(55)}
                    />
                </View>
                <View style={{ width: Metrics.screenWidth * 0.6, alignSelf: 'center', marginTop: Metrics.ratio(15) }}>

                    <CustomText
                        style={{ alignSelf: 'flex-end' }}
                        fontSize={Metrics.ratio(16)}
                        color={Colors.primary}
                        title={'*All fields are required'}
                    />
                </View>
            </View>
            <View style={{ height: Metrics.screenHeight * 0.15, justifyContent: 'center' }}>
                <Button
                    onPress={() => navigation.navigate('Dashboard')}
                    height={Metrics.ratio(40)}
                    width={Metrics.screenWidth * 0.8}
                    fontSize={Metrics.ratio(25)}
                    title='NEXT'
                    style={{ alignSelf: 'center', }}
                    radius={Metrics.ratio(55)}
                />
            </View>

            {/* <View style={{
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
                <CustomText
                    style={{ marginLeft: Metrics.ratio(30) }}
                    fontSize={Metrics.ratio(16)}
                    color={Colors.primary}
                    fontWeight='bold'
                    title={'SIGN UP'}
                />
            </View>
      */}
        </View>
    )
}

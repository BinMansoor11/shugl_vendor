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


export default function BankDetail({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header heading='Bank Detail' />
            <View style={{ height: Metrics.screenHeight * 0.7, justifyContent: 'space-around' }}>

                <View style={{

                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center',
                    marginTop: Metrics.screenHeight * 0.07
                    // height: Metrics.screenHeight * 0.13

                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Account Title'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Bank'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Accout Number'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Branch Code'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='IBAN Number'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.6 }}
                        placeholder='Swift Code'
                    />
                </View>

            </View>
            <View style={{ height: Metrics.screenHeight * 0.3, justifyContent: 'center' }}>
                <Button
                    onPress={() => navigation.navigate('AddToFeature')}
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

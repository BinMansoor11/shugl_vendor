import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
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


export default function AddToFeature({ navigation }) {
    return (
        <Footer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header heading='Add to Feature' />
                <View style={{ paddingBottom: Metrics.ratio(60) }}>
                    <ScrollView>
                        <View style={{
                            //  height: Metrics.screenHeight * 0.06, 
                            width: Metrics.screenWidth * 0.9,
                            alignSelf: 'center',
                            marginTop: Metrics.ratio(25)
                        }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Select your Venue'}
                            />
                            <View style={{
                                //  height: Metrics.screenHeight * 0.06, 
                                width: Metrics.screenWidth * 0.7,
                                alignSelf: 'center',
                                marginTop: Metrics.ratio(10),
                                marginBottom: Metrics.ratio(25),
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                                <VenueCard />
                                <VenueCard />
                            </View>
                        </View>
                        <Separator width={Metrics.screenWidth * 0.9} />

                        <View style={{
                            //  height: Metrics.screenHeight * 0.06, 
                            width: Metrics.screenWidth * 0.8,
                            alignSelf: 'center',
                            marginTop: Metrics.ratio(15),
                            marginBottom: Metrics.ratio(20)
                        }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Select Duration'}
                            />
                            <View style={{
                                width: Metrics.screenWidth * 0.7,
                                flexDirection: 'row',
                                marginTop: Metrics.ratio(10),
                            }}>
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'1 Week'} />
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'2 Weeks'} />

                            </View>

                            <View style={{
                                width: Metrics.screenWidth * 0.7,
                                flexDirection: 'row',
                                marginTop: Metrics.ratio(10),
                            }}>
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'3 Weeks'} />
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'Others'} one oneText='1 Month' />

                            </View>
                        </View>


                        <Separator width={Metrics.screenWidth * 0.9} />




                        <View style={{ marginTop: Metrics.ratio(10), width: Metrics.screenWidth * .8, alignSelf: 'center' }}>

                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Total Amount'}
                            />
                        </View>

                        <View style={{ marginTop: Metrics.ratio(10), width: Metrics.screenWidth * .8, alignSelf: 'center' }}>

                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(35)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'15'}
                            />
                        </View>

                        <Separator width={Metrics.screenWidth * 0.9} />



                        <View style={{
                            //  height: Metrics.screenHeight * 0.06, 
                            width: Metrics.screenWidth * 0.8,
                            alignSelf: 'center',
                            marginTop: Metrics.ratio(15),
                            marginBottom: Metrics.ratio(20)
                        }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Select Payment Method'}
                            />
                            <View style={{
                                width: Metrics.screenWidth * 0.7,
                                flexDirection: 'row',
                                marginTop: Metrics.ratio(10),
                            }}>
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'Visa'} />
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'Mastercard'} />

                            </View>

                            <View style={{
                                width: Metrics.screenWidth * 0.7,
                                flexDirection: 'row',
                                marginTop: Metrics.ratio(10),
                            }}>
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'Easy Paisa'} />
                                <CheckBox style={{ flex: 1, marginLeft: Metrics.ratio(10) }} text={'Others'} one oneText='Jazz Cash' />

                            </View>
                        </View>


                        <Separator width={Metrics.screenWidth * 0.9} />


                        <Button
                            onPress={() => navigation.navigate('ReserveSlot')}
                            height={Metrics.ratio(53)}
                            width={Metrics.screenWidth * 0.8}
                            fontSize={Metrics.ratio(16)}
                            color='#00FF11'
                            fontWeight='bold'
                            title='Add to Featured'
                            style={{ alignSelf: 'center', marginTop: Metrics.ratio(25) }}
                            radius={Metrics.ratio(55)}
                        />

                        <Button
                            onPress={() => null}
                            height={Metrics.ratio(53)}
                            width={Metrics.screenWidth * 0.8}
                            fontSize={Metrics.ratio(16)}
                            title='Cancel'
                            style={{ alignSelf: 'center', marginVertical: Metrics.ratio(15) }}
                            radius={Metrics.ratio(55)}
                            border
                        />


                    </ScrollView>
                </View>

            </View>
        </Footer>)
}

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


export default function PendingBookings({ navigation }) {
    return (
        <Footer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header heading='Pending Bookings' />
                <View style={{ paddingBottom: Metrics.ratio(175) }}>

                    <View style={{ flexDirection: 'row', height: Metrics.screenHeight * 0.06, marginTop: Metrics.ratio(10) }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(14)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'Pending Bookings'}
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(14)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'Earning \nFrom All'}
                            />
                        </View>
                        <View style={{ flex: 1.5, justifyContent: 'center' }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(12)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Payments Confirmed: 25'}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(35)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'15'}
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(35)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'2500'}
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Button
                                onPress={() => navigation.navigate('BankDetail')}
                                height={Metrics.ratio(40)}
                                width={Metrics.screenWidth * 0.35}
                                fontSize={Metrics.ratio(16)}
                                color='#00FF11'
                                fontWeight='bold'
                                title='Confirm All'
                                style={{ alignSelf: 'center', }}
                                radius={Metrics.ratio(55)}
                            />
                        </View>
                    </View>
                    <Separator width={Metrics.screenWidth * 0.9} />
                    <ScrollView>


                        {
                            [2, 2, 2, 2].map((v) => {
                                return <View style={{ width: Metrics.screenWidth * .9, alignSelf: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <CustomText
                                                // style={{ flex: 1 }}
                                                fontSize={Metrics.ratio(20)}
                                                color={Colors.text.primary}
                                                // fontWeight='bold'
                                                title={'Booking #'}
                                            />
                                            <CustomText
                                                // style={{ flex: 1 }}
                                                fontSize={Metrics.ratio(20)}
                                                color={Colors.text.primary}
                                                fontWeight='bold'
                                                title={' 1'}
                                            />
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <CustomText
                                                // style={{ flex: 1 }}
                                                fontSize={Metrics.ratio(16)}
                                                color={Colors.text.primary}
                                                // fontWeight='bold'
                                                title={'Venue: '}
                                            />
                                            <CustomText
                                                // style={{ flex: 1 }}
                                                fontSize={Metrics.ratio(16)}
                                                color={Colors.text.primary}
                                                fontWeight='bold'
                                                title={'Al Bilal Farmhouse'}
                                            />
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', height: Metrics.screenHeight * .17 }}>

                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{
                                                height: Metrics.ratio(110),
                                                width: Metrics.ratio(110),
                                                borderRadius: Metrics.ratio(109),
                                                overflow: 'hidden',
                                                borderWidth: Metrics.ratio(3),
                                                borderColor: Colors.primary
                                            }}>
                                                <Image
                                                    resizeMode='cover'
                                                    style={{
                                                        height: '100%',
                                                        width: '100%',
                                                    }}
                                                    source={require('../../assets/images/profile.png')} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 2, justifyContent: 'center', marginLeft: Metrics.ratio(20) }}>
                                            <CustomText
                                                // style={{ flex: 1 }}
                                                fontSize={Metrics.ratio(20)}
                                                color={Colors.text.primary}
                                                fontWeight='bold'
                                                title={'Daniyal Saboor'}
                                            />
                                            <View style={{ flexDirection: 'row' }}>
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    // fontWeight='bold'
                                                    title={'Date: '}
                                                />
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    fontWeight='bold'
                                                    title={'18 Jan 2021'}
                                                />
                                            </View>

                                            <View style={{ flexDirection: 'row' }}>
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    // fontWeight='bold'
                                                    title={'Time Slot: '}
                                                />
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    fontWeight='bold'
                                                    title={'6:00 am to 8:00 pm'}
                                                />
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    // fontWeight='bold'
                                                    title={'Payment: '}
                                                />
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    fontWeight='bold'
                                                    title={'Rs. 8000'}
                                                />
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    // fontWeight='bold'
                                                    title={'Status: '}
                                                />
                                                <CustomText
                                                    // style={{ flex: 1 }}
                                                    fontSize={Metrics.ratio(16)}
                                                    color={Colors.text.primary}
                                                    fontWeight='bold'
                                                    title={'Confirmed/Pending'}
                                                />
                                            </View>


                                        </View>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <Button
                                                onPress={() => null}
                                                height={Metrics.ratio(40)}
                                                width={Metrics.screenWidth * 0.28}
                                                fontSize={Metrics.ratio(16)}
                                                title='Cancel'
                                                style={{ alignSelf: 'center', }}
                                                radius={Metrics.ratio(55)}
                                                border
                                            />
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <Button
                                                onPress={() => null}
                                                height={Metrics.ratio(40)}
                                                width={Metrics.screenWidth * 0.28}
                                                fontSize={Metrics.ratio(16)}
                                                fontWeight='bold'
                                                title='View Details'
                                                style={{ alignSelf: 'center', }}
                                                radius={Metrics.ratio(55)}
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Button
                                                onPress={() => null}
                                                height={Metrics.ratio(40)}
                                                width={Metrics.screenWidth * 0.3}
                                                fontSize={Metrics.ratio(16)}
                                                color='#00FF11'
                                                fontWeight='bold'
                                                title='Confirm All'
                                                style={{ alignSelf: 'center', }}
                                                radius={Metrics.ratio(55)}
                                            />
                                        </View>
                                    </View>
                                    <Separator width={Metrics.screenWidth * 0.9} />
                                </View>
                            }
                            )}

                    </ScrollView>

                </View>

            </View>
        </Footer>)
}

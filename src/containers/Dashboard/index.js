import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
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


export default function Dashboard({ navigation }) {
    return (
        <Footer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header heading='Your Dashboard' />
                <View style={{ height: Metrics.screenHeight * 0.7, }}>

                    <View style={{ flexDirection: 'row', height: Metrics.screenHeight * 0.06, marginTop: Metrics.ratio(10) }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(14)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'Pending Bookings'}
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <CustomText
                                // style={{ flex: 1 }}
                                fontSize={Metrics.ratio(14)}
                                color={Colors.text.primary}
                                fontWeight='bold'
                                title={'Earning \nFrom All'}
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Button
                                onPress={() => null}
                                height={Metrics.ratio(40)}
                                width={Metrics.screenWidth * 0.35}
                                fontSize={Metrics.ratio(16)}
                                // fontWeight='bold'
                                title='View Bookings'
                                style={{ alignSelf: 'center', }}
                                radius={Metrics.ratio(55)}
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
                                onPress={() => null}
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
                        <View style={{ width: Metrics.screenWidth * 0.9, alignSelf: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Bookings Today'}
                            />
                            <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <CustomText
                                        // style={{}}
                                        fontSize={Metrics.ratio(35)}
                                        color={Colors.text.primary}
                                        fontWeight='bold'
                                        title={'15'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}></View>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Button
                                        onPress={() => null}
                                        height={Metrics.ratio(40)}
                                        width={Metrics.screenWidth * 0.35}
                                        fontSize={Metrics.ratio(16)}
                                        // fontWeight='bold'
                                        title='View Details'
                                        style={{ alignSelf: 'center', }}
                                        radius={Metrics.ratio(55)}
                                    />
                                </View>
                            </View>
                            <Separator width={Metrics.screenWidth * 0.9} />
                        </View>



                        <View style={{ width: Metrics.screenWidth * 0.9, alignSelf: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Bookings Today'}
                            />
                            <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <CustomText
                                        // style={{}}
                                        fontSize={Metrics.ratio(35)}
                                        color={Colors.text.primary}
                                        fontWeight='bold'
                                        title={'15'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}></View>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Button
                                        onPress={() => null}
                                        height={Metrics.ratio(40)}
                                        width={Metrics.screenWidth * 0.35}
                                        fontSize={Metrics.ratio(16)}
                                        // fontWeight='bold'
                                        title='View Details'
                                        style={{ alignSelf: 'center', }}
                                        radius={Metrics.ratio(55)}
                                    />
                                </View>
                            </View>
                            <Separator width={Metrics.screenWidth * 0.9} />
                        </View>



                        <View style={{ width: Metrics.screenWidth * 0.9, alignSelf: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Bookings Today'}
                            />
                            <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <CustomText
                                        // style={{}}
                                        fontSize={Metrics.ratio(35)}
                                        color={Colors.text.primary}
                                        fontWeight='bold'
                                        title={'15'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}></View>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Button
                                        onPress={() => null}
                                        height={Metrics.ratio(40)}
                                        width={Metrics.screenWidth * 0.35}
                                        fontSize={Metrics.ratio(16)}
                                        // fontWeight='bold'
                                        title='View Details'
                                        style={{ alignSelf: 'center', }}
                                        radius={Metrics.ratio(55)}
                                    />
                                </View>
                            </View>
                            <Separator width={Metrics.screenWidth * 0.9} />
                        </View>



                        <View style={{ width: Metrics.screenWidth * 0.9, alignSelf: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Bookings Today'}
                            />
                            <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <CustomText
                                        // style={{}}
                                        fontSize={Metrics.ratio(35)}
                                        color={Colors.text.primary}
                                        fontWeight='bold'
                                        title={'15'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}></View>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Button
                                        onPress={() => null}
                                        height={Metrics.ratio(40)}
                                        width={Metrics.screenWidth * 0.35}
                                        fontSize={Metrics.ratio(16)}
                                        // fontWeight='bold'
                                        title='View Details'
                                        style={{ alignSelf: 'center', }}
                                        radius={Metrics.ratio(55)}
                                    />
                                </View>
                            </View>
                            <Separator width={Metrics.screenWidth * 0.9} />
                        </View>


                        <View style={{ width: Metrics.screenWidth * 0.9, alignSelf: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Bookings Today'}
                            />
                            <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <CustomText
                                        // style={{}}
                                        fontSize={Metrics.ratio(35)}
                                        color={Colors.text.primary}
                                        fontWeight='bold'
                                        title={'15'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}></View>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Button
                                        onPress={() => null}
                                        height={Metrics.ratio(40)}
                                        width={Metrics.screenWidth * 0.35}
                                        fontSize={Metrics.ratio(16)}
                                        // fontWeight='bold'
                                        title='View Details'
                                        style={{ alignSelf: 'center', }}
                                        radius={Metrics.ratio(55)}
                                    />
                                </View>
                            </View>
                            <Separator width={Metrics.screenWidth * 0.9} />
                        </View>



                        <View style={{ width: Metrics.screenWidth * 0.9, alignSelf: 'center' }}>
                            <CustomText
                                // style={{}}
                                fontSize={Metrics.ratio(20)}
                                color={Colors.text.primary}
                                // fontWeight='bold'
                                title={'Bookings Today'}
                            />
                            <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(10) }}>

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <CustomText
                                        // style={{}}
                                        fontSize={Metrics.ratio(35)}
                                        color={Colors.text.primary}
                                        fontWeight='bold'
                                        title={'15'}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}></View>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Button
                                        onPress={() => null}
                                        height={Metrics.ratio(40)}
                                        width={Metrics.screenWidth * 0.35}
                                        fontSize={Metrics.ratio(16)}
                                        // fontWeight='bold'
                                        title='View Details'
                                        style={{ alignSelf: 'center', }}
                                        radius={Metrics.ratio(55)}
                                    />
                                </View>
                            </View>
                            <Separator width={Metrics.screenWidth * 0.9} />
                        </View>

                    </ScrollView>

                </View>
                <View style={{
                    height: Metrics.screenHeight * 0.2,
                    // justifyContent: 'center',
                    // backgroundColor: 'red'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        width: Metrics.screenWidth * 0.85,
                        justifyContent: 'space-between'
                    }}>

                        <Button
                            onPress={() => null}
                            height={Metrics.ratio(40)}
                            width={Metrics.screenWidth * 0.4}
                            fontSize={Metrics.ratio(16)}
                            fontWeight='bold'
                            title='Add New Venue'
                            style={{ alignSelf: 'center', }}
                            radius={Metrics.ratio(55)}
                        />
                        <Button
                            onPress={() => null}
                            height={Metrics.ratio(40)}
                            width={Metrics.screenWidth * 0.4}
                            fontSize={Metrics.ratio(16)}
                            fontWeight='bold'
                            title='Add To Featured'
                            style={{ alignSelf: 'center', }}
                            radius={Metrics.ratio(55)}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        width: Metrics.screenWidth * 0.85,
                        justifyContent: 'space-between',
                        marginTop: Metrics.ratio(20)
                    }}>

                        <Button
                            onPress={() => null}
                            height={Metrics.ratio(40)}
                            width={Metrics.screenWidth * 0.4}
                            fontSize={Metrics.ratio(16)}
                            fontWeight='bold'
                            title='Reserve Your Slot'
                            style={{ alignSelf: 'center', }}
                            radius={Metrics.ratio(55)}
                        />
                        <Button
                            onPress={() => navigation.navigate('PendingBookings')}
                            height={Metrics.ratio(40)}
                            width={Metrics.screenWidth * 0.4} x
                            fontSize={Metrics.ratio(16)}
                            fontWeight='bold'
                            title='Manage Reviews'
                            style={{ alignSelf: 'center', }}
                            radius={Metrics.ratio(55)}
                        />
                    </View>

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
        </Footer>)
}

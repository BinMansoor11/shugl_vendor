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
import moment from 'moment'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

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


const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

export default function ReserveSlot({ navigation }) {
    return (
        <Footer>
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <Header heading='Reserve Your Slot' />
                <ScrollView contentContainerStyle={{ paddingBottom: Metrics.ratio(20) }}>

                    <View style={{
                        width: Metrics.screenWidth * 0.9,
                        alignSelf: 'center',
                        backgroundColor: '#fff',
                        elevation: 2,
                        marginTop: Metrics.ratio(5),
                        paddingBottom: Metrics.ratio(15),
                        borderRadius: Metrics.ratio(20)
                    }}>
                        <View style={{
                            width: '100%',
                            height: Metrics.screenHeight * .11,
                            borderColor: Colors.primary,
                            borderWidth: Metrics.ratio(25),
                            borderTopRightRadius: Metrics.ratio(20),
                            borderTopLeftRadius: Metrics.ratio(20),
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1
                        }} />
                        <Calendar
                            markingType={'multi-dot'}
                            markedDates={{
                                '2021-08-21': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                                '2021-08-20': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                            }}
                            hideArrows={true}
                            enableSwipeMonths={true}
                            renderHeader={(date) => {/*Return JSX*/

                                return (
                                    <View style={{
                                        width: '100%',
                                        height: Metrics.screenHeight * .1,
                                        backgroundColor: Colors.primary,
                                        borderTopRightRadius: Metrics.ratio(20),
                                        borderTopLeftRadius: Metrics.ratio(20),
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 3
                                    }}>
                                        <Text style={{ color: '#fff', fontSize: Metrics.ratio(25) }}>{moment(date).format("MMMM YYYY")}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>


                    <View style={{
                        width: Metrics.screenWidth * 0.85,
                        alignSelf: 'center',
                        backgroundColor: '#fff',
                        marginVertical: Metrics.ratio(20)
                    }}>

                        <View style={{ flexDirection: 'row' }}>
                            <CustomText
                                style={{ flex: 1, }}
                                fontSize={Metrics.ratio(16)}
                                color='#000'
                                // fontWeight='normal'
                                title={'Date'}
                            />
                            <CustomText
                                style={{ flex: 1 }}
                                fontSize={Metrics.ratio(16)}
                                color='#000'
                                // fontWeight='normal'
                                title={'Slot'}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(20), }}>
                            <View style={{ flex: 1, }}>

                                <CustomText
                                    style={{ flex: 1, }}
                                    fontSize={Metrics.ratio(16)}
                                    color='#000'
                                    // fontWeight='normal'
                                    title={'10th'}
                                />
                                <CustomText
                                    style={{ flex: 1, marginTop: Metrics.ratio(8) }}
                                    fontSize={Metrics.ratio(11)}
                                    color='rgba(46, 46, 46, 0.5)'
                                    title={'16:00'}
                                />
                            </View>
                            <View style={{ flex: 4, marginTop: Metrics.ratio(5), flexDirection: 'row', }}>
                                <View style={{
                                    backgroundColor: '#FA1A64',
                                    height: Metrics.ratio(7),
                                    width: Metrics.ratio(7),
                                    borderRadius: Metrics.ratio(10),
                                    marginTop: Metrics.ratio(5),
                                }} />
                                <CustomText
                                    style={{ marginLeft: Metrics.ratio(15), }}
                                    fontSize={Metrics.ratio(12)}
                                    color='#434343'
                                    // fontWeight='normal'
                                    title={'8:00am-6:00pm | 7:00pm-3:00am'}
                                />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(20), }}>
                            <View style={{ flex: 1, }}>

                                <CustomText
                                    style={{ flex: 1, }}
                                    fontSize={Metrics.ratio(16)}
                                    color='#000'
                                    // fontWeight='normal'
                                    title={'10th'}
                                />
                                <CustomText
                                    style={{ flex: 1, marginTop: Metrics.ratio(8) }}
                                    fontSize={Metrics.ratio(11)}
                                    color='rgba(46, 46, 46, 0.5)'
                                    title={'16:00'}
                                />
                            </View>
                            <View style={{ flex: 4, marginTop: Metrics.ratio(5), flexDirection: 'row', }}>
                                <View style={{
                                    backgroundColor: '#FA1A64',
                                    height: Metrics.ratio(7),
                                    width: Metrics.ratio(7),
                                    borderRadius: Metrics.ratio(10),
                                    marginTop: Metrics.ratio(5),
                                }} />
                                <CustomText
                                    style={{ marginLeft: Metrics.ratio(15), }}
                                    fontSize={Metrics.ratio(12)}
                                    color='#434343'
                                    // fontWeight='normal'
                                    title={'8:00am-6:00pm | 7:00pm-3:00am'}
                                />
                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', marginTop: Metrics.ratio(20), }}>
                            <View style={{ flex: 1, }}>

                                <CustomText
                                    style={{ flex: 1, }}
                                    fontSize={Metrics.ratio(16)}
                                    color='#000'
                                    // fontWeight='normal'
                                    title={'10th'}
                                />
                                <CustomText
                                    style={{ flex: 1, marginTop: Metrics.ratio(8) }}
                                    fontSize={Metrics.ratio(11)}
                                    color='rgba(46, 46, 46, 0.5)'
                                    title={'16:00'}
                                />
                            </View>
                            <View style={{ flex: 4, marginTop: Metrics.ratio(5), flexDirection: 'row', }}>
                                <View style={{
                                    backgroundColor: '#FA1A64',
                                    height: Metrics.ratio(7),
                                    width: Metrics.ratio(7),
                                    borderRadius: Metrics.ratio(10),
                                    marginTop: Metrics.ratio(5),
                                }} />
                                <CustomText
                                    style={{ marginLeft: Metrics.ratio(15), }}
                                    fontSize={Metrics.ratio(12)}
                                    color='#434343'
                                    // fontWeight='normal'
                                    title={'8:00am-6:00pm | 7:00pm-3:00am'}
                                />
                            </View>
                        </View>




                    </View>


                    <View style={{}}>
                        <Button
                            onPress={() => navigation.navigate('UnReserveSlot')}
                            height={Metrics.ratio(45)}
                            width={Metrics.screenWidth * 0.9}
                            fontSize={Metrics.ratio(28)}
                            title='Reserve Slot'
                            style={{ alignSelf: 'center', }}
                            radius={Metrics.ratio(55)}
                        />
                    </View>

                </ScrollView>

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

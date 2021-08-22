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


export default function BeachHutDetail({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header heading='Beach Hut Details' />
            <ScrollView>
                <Button
                    onPress={() => navigation.navigate('Dashboard')}
                    height={Metrics.ratio(40)}
                    width={Metrics.screenWidth * 0.6}
                    fontWeight='bold'
                    fontSize={Metrics.ratio(18)}
                    title='Upload Pictures'
                    style={{ alignSelf: 'center', marginTop: Metrics.ratio(25) }}
                    radius={Metrics.ratio(55)}
                />




                <View style={{

                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.8,
                    alignSelf: 'center',
                    marginTop: Metrics.ratio(25)
                    // height: Metrics.screenHeight * 0.13

                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Venue Name'
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: Metrics.screenWidth * 0.8,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.7 }}
                        placeholder='Address'
                        disabled
                    />
                    <Button
                        onPress={() => null}
                        height={Metrics.ratio(33)}
                        width={Metrics.ratio(33)}
                        fontSize={Metrics.ratio(10)}
                        icon
                        style={{ alignSelf: 'center', }}
                        radius={Metrics.ratio(55)}
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='City'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Description'
                    />
                </View>

                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    // flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CustomText
                        style={{ marginBottom: Metrics.ratio(10), marginLeft: Metrics.ratio(10) }}
                        fontSize={Metrics.ratio(14)}
                        color={'rgba(46, 46, 46, 0.4)'}
                        // fontWeight='bold'
                        title={'Service Hours'}
                    />
                    <CheckBox style={{ flex: 1, }} text={'24 Hours'} />
                    <CheckBox style={{ flex: 1, }} text={'Specific'} one oneText='8:00 am' two twoText='12:00 am' />

                </View>

                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Area (Sq. Ft)'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Number of Floors'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Number of Rooms'
                    />
                </View>

                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    // flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CustomText
                        style={{ marginBottom: Metrics.ratio(10), marginLeft: Metrics.ratio(10) }}
                        fontSize={Metrics.ratio(14)}
                        color={'rgba(46, 46, 46, 0.4)'}
                        // fontWeight='bold'
                        title={'Service Hours'}
                    />
                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 0.6, }} text={'4 Hours'} />
                    <CheckBox style={{ flex: 1, }} text={'6 Hours'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 0.6, }} text={'8 Hours'} />
                    <CheckBox style={{ flex: 1, }} text={'Other'} one oneText='1 Hour' />

                </View>

                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Rent Per Slot (Weekday)'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Rent Per Slot (Weekend/Public Holiday)'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Rent Per Day (24 Hours)'
                    />
                </View>
                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Rent Per Day (Weekend/Public Holiday)'
                    />
                </View>


                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    // flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CustomText
                        style={{ marginBottom: Metrics.ratio(10), marginLeft: Metrics.ratio(10) }}
                        fontSize={Metrics.ratio(14)}
                        color={'rgba(46, 46, 46, 0.4)'}
                        // fontWeight='bold'
                        title={'Service Hours'}
                    />
                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Electricity'} />
                    <CheckBox style={{ flex: 1, }} text={'Generator'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Kitchen'} />
                    <CheckBox style={{ flex: 1, }} text={'Microwave'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Parking'} />
                    <CheckBox style={{ flex: 1, }} text={'Air Conditioning'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Swimming Pool'} />
                    <CheckBox style={{ flex: 1, }} text={'Sofa(s)'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Dining Table(s)'} />
                    <CheckBox style={{ flex: 1, }} text={'Chair(s)'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Bed(s)'} />
                    <CheckBox style={{ flex: 1, }} text={'Outdoor Furniture'} />

                </View>
                <View style={{
                    width: Metrics.screenWidth * 0.8,
                    flexDirection: 'row',
                    marginTop: Metrics.ratio(10),
                    alignSelf: 'center'
                }}>
                    <CheckBox style={{ flex: 1, }} text={'Water'} />
                    <CheckBox style={{ flex: 1, }} text={'Gas'} />

                </View>




                <View style={{

                    alignItems: 'center',
                    // width: Metrics.screenWidth * 0.7,
                    alignSelf: 'center'
                }}>

                    <CustomTextInput
                        customStyle={{ width: Metrics.screenWidth * 0.8 }}
                        placeholder='Other Facilities'
                    />
                </View>




                <Button
                    onPress={() => navigation.navigate('Dashboard')}
                    height={Metrics.ratio(40)}
                    width={Metrics.screenWidth * 0.9}
                    // fontWeight='bold'
                    fontSize={Metrics.ratio(25)}
                    title='Next'
                    style={{ alignSelf: 'center', marginVertical: Metrics.ratio(25) }}
                    radius={Metrics.ratio(55)}
                />
            </ScrollView>
        </View>
    )
}

import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
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


function CategoryCard(props) {
    const {
        i
    } = props



    return <TouchableOpacity style={{
        height: Metrics.screenHeight * 0.15,
        width: Metrics.screenWidth * 0.28,
        borderRadius: Metrics.ratio(12),
        overflow: 'hidden',
        elevation: Metrics.ratio(10),
        backgroundColor: (i === 0 || i === 3 || i === 4 || i === 7) ? Colors.primary : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrics.ratio(30),
    }}>
        <View style={{ alignItems: 'center' }}>
            <Icons.Octicons name='home' color={(i === 0 || i === 3 || i === 4 || i === 7) ? '#fff' : Colors.primary} size={Metrics.ratio(60)} />
            <CustomText
                style={{ marginTop: Metrics.ratio(8), }}
                fontSize={Metrics.ratio(10)}
                // fontWeight='normal'
                color={(i === 0 || i === 3 || i === 4 || i === 7) ? '#fff' : '#404040'}
                title={'Beach Huts'}
            />

        </View>
    </TouchableOpacity>
}


export default function Categories({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header heading='Categories' />
            <View style={{
                width: Metrics.screenWidth * .8, alignSelf: 'center'
            }}>
                <CustomText
                    style={{ marginTop: Metrics.ratio(10), }}
                    fontSize={Metrics.ratio(25)}
                    color='#707070'
                    fontWeight='bold'
                    title={'Select One Category:'}
                />
            </View>
            <ScrollView>
                <View style={{
                    // marginTop: Metrics.ratio(10),
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around', width: Metrics.screenWidth * .8, alignSelf: 'center'
                }}>

                    {[1, 1, 1, 1, 1, 1, 1, 1].map((v, i) => <CategoryCard i={i} />)}
                </View>

                <Button
                    onPress={() => navigation.navigate('Login')}
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

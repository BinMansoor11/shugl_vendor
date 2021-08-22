import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Login,
    SignUp,
    BankDetail,
    Dashboard,
    PendingBookings,
    ReserveSlot,
    UnReserveSlot,
    AddToFeature,
    BeachHutDetail,
    Categories,

} from '../containers'

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="PendingBookings" component={PendingBookings} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="BankDetail" component={BankDetail} />
            <Stack.Screen name="ReserveSlot" component={ReserveSlot} />
            <Stack.Screen name="UnReserveSlot" component={UnReserveSlot} />
            <Stack.Screen name="AddToFeature" component={AddToFeature} />
            <Stack.Screen name="BeachHutDetail" component={BeachHutDetail} />
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    );
}
import React from 'react'
import { EveryThing } from '../../screen/Home/Everything/EveryThing'
import { NotificationTopHeadline } from '../../screen/Home/NotificationTopHeadline/NotificationTopHeadline';
import { createStackNavigator } from '@react-navigation/stack'
import { Detail } from '../../screen/Detail/Detail';
import { Search } from '../../screen/Search/Search';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    return (

        <Stack.Navigator
        initialRouteName="EveryThing"
        >

            <Stack.Screen 
                name="EveryThing"
                component={ EveryThing }
                options={{
                    headerShown : false
                }}
            />

            <Stack.Screen 
                name="NotificationTopHeadline"
                component={ NotificationTopHeadline }
                options={{
                    title : 'Hot Update',
                }}
            />

            <Stack.Screen 
                name="Detail"
                component={ Detail }
                options={{
                    headerShown : false
                }}
            />


            <Stack.Screen 
                name="Search"
                component={ Search }
                options={{
                    headerShown : false
                }}
            />

        </Stack.Navigator>        

    )

}
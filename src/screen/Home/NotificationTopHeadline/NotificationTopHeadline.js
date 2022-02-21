import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { notificationstyle } from '../../../style/Home/NotificationTopHeadline/NotificationTopHeadlineStyle'
import { useNavigation } from '@react-navigation/native'

export const NotificationTopHeadline = () => {

    const navigation = useNavigation();
    const [values, setAllValues] = useState({

        textNews: '',
        typeNameCategoryNews: ''

    })


    return (

        <View style={notificationstyle.container}>

            <View style={notificationstyle.accomodateNewsTopHeadline}>

                <Image
                    source={require('../../../assets/Image/image1.png')}
                    style={notificationstyle.imageNewsTopHeadline}
                />

                <Text style={notificationstyle.textDate}>Monday, 10 May 2021</Text>

                <Text style={notificationstyle.textContentTitle}>
                    WHO classifies triple-mutant Covid variant from India as global health risk
                </Text>

                <Text style={notificationstyle.textContentDescription}>
                    A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a... <Text style={notificationstyle.textReadmore}>Read More</Text>
                </Text>

                <Text style={notificationstyle.textPublished}>
                    Published by Berkeley Lovelace Jr.
                </Text>

            </View>

            <View style={notificationstyle.accomodateNewsTopHeadline}>

                <Image
                    source={require('../../../assets/Image/image1.png')}
                    style={notificationstyle.imageNewsTopHeadline}
                />

                <Text style={notificationstyle.textDate}>Monday, 10 May 2021</Text>

                <Text style={notificationstyle.textContentTitle}>
                    WHO classifies triple-mutant Covid variant from India as global health risk
                </Text>

                <Text style={notificationstyle.textContentDescription}>
                    A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a... <Text style={notificationstyle.textReadmore}>Read More</Text>
                </Text>

                <Text style={notificationstyle.textPublished}>
                    Published by Berkeley Lovelace Jr.
                </Text>

            </View>

        </View>

    )
}
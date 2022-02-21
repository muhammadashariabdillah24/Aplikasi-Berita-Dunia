import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const Splash = () => {

    return (

        <View>

            <LottieView
                source={require('../../assets/LottieFiles/lf30_editor_g8pyfwdn.json')}
                autoPlay
                loop
                style={ }
            />
            
        </View>

    )

}
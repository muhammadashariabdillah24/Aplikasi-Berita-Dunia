import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { detailstyle } from '../../style/DetailStyle/DetailStyle'
import { WebView } from 'react-native-webview'
import { useRoute } from '@react-navigation/native'

export const Detail = () => {

    const route = useRoute();
    const ref = useRef(true);
    const [values, setAllValues] = useState({
        
        linkUri : ''
    })

    const { linkUri } = values

    useEffect(() => {

        if (ref.current) {
            
            setAllValues(prev => {
                return {
                    ...prev,
                    linkUri : route.params.link
                }
            })

        }

        return () => {

            ref.current = false
            
        }
    }, [])

    return (

        <WebView 
            source={{ uri : linkUri}}
        />

        // <View style={detailstyle.container}>

        //     <View style={detailstyle.accomodateImageForDetail}>

        //         <Image
        //             source={require('../../assets/Image/ImageForDetail.png')}
        //             style={detailstyle.imageForDetail}
        //         />

        //         <TouchableOpacity
        //             style={detailstyle.accomodateIconArrowBack}
        //             onPress={() => {

        //             }}
        //         >

        //             <Image
        //                 source={require('../../assets/Icon/arrowBack.png')}
        //             />

        //         </TouchableOpacity>


        //         <View key={'blurContent'} style={detailstyle.content}>

        //             <Text>

        //                 Crypto investors should be prepared to lose all their money, BOE governor says

        //             </Text>

        //         </View>

        //     </View>

        //     <ScrollView style={detailstyle.accomodateDescription}>

        //         <Text style={detailstyle.textDescrtiption}>

        //             LONDON — Cryptocurrencies “have no intrinsic value” and people who invest in them should be prepared to lose all their money, Bank of England Governor Andrew Bailey said.

        //             Digital currencies like bitcoin, ether and even dogecoin have been on a tear this year, reminding some investors of the 2017 crypto bubble in which bitcoin blasted toward $20,000, only to sink as low as $3,122 a year later.

        //             Asked at a press conference Thursday about the rising value of cryptocurrencies, Bailey said: “They have no intrinsic value. That doesn’t mean to say people don’t put value on them, because they can have extrinsic value. But they have no intrinsic value.”

        //             “I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”

        //             Bailey’s comments echoed a similar warning from the U.K.’s Financial Conduct Authority.

        //             “Investing in cryptoassets, or investments and lending linked to them, generally involves taking very high risks with investors’ money,” the financial services watchdog said in January.

        //             “If consumers invest in these types of product, they should be prepared to lose all their money.”

        //             Bailey, who was formerly the chief executive of the FCA, has long been a skeptic of crypto. In 2017, he warned: “If you want to invest in bitcoin, be prepared to lose all your money.”

        //         </Text>

        //     </ScrollView>

        // </View>

    )

}
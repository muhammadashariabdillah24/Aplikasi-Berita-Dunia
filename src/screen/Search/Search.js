import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { searchstyle } from '../../style/SearchStyle/SearchStyle'
// import { searchItem } from '../../service/API/Search/searchItem'

export const Search = () => {

    const ref = useRef(true)
    const [values, setAllValues] = useState({

        textSearchNews: '',
        loadingForData: false,
        dataResultSearch: []

    })

    const { textSearchNews, loadingForData, dataResultSearch } = values

    useEffect(async () => {

        if (ref.current) {

            const awaitSearchNews = await textSearchNews

            console.log('awaitSearchNews', awaitSearchNews);

            await fetch(`https://newsapi.org/v2/top-headlines?q=${awaitSearchNews}&apiKey=66c3d5faed4848e18a906d02b1d97f0b`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(result => {


                    const { articles } = result

                    console.log(articles);

                    setAllValues(prev => {

                        return {
                            ...prev,

                            dataResultSearch: articles

                        }

                    })

                })
                .catch(err => console.log(err))
                .finally(() => {

                    setAllValues(prev => {

                        return {
                            ...prev,
                            loadingForData: false
                        }
                    })

                    console.log('Api Berhenti');

                })
        }

        return () => {
            ref = false
        }   

    }, [textSearchNews, dataResultSearch, loadingForData])

    return (

        <View style={searchstyle.container}>

            <View style={searchstyle.accomodateBoxSearch}>

                <TextInput
                    style={searchstyle.boxSearch}
                    allowFontScaling
                    placeholder="Cari Berita Apa ?"
                    placeholderTextColor="#818181"
                    onChangeText={(searchNews) => {

                        setAllValues(prev => {

                            return {
                                ...prev,

                                textSearchNews: searchNews
                            }
                        })

                    }}
                />

                <TouchableOpacity
                    style={searchstyle.buttonX}
                    onPress={() => {

                        setAllValues(prev => {

                            return {
                                ...prev,
                                textSearchNews: ''
                            }
                        })

                    }}
                >

                    <Image
                        source={require('../../assets/Icon/IconX.png')}
                    />

                </TouchableOpacity>

            </View>


        </View>

    )

}
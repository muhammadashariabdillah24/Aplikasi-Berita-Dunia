import React, { useEffect, useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight } from 'react-native'
import { everythingstyle } from '../../../style/Home/EveryThingStyle/EveryThingStyle'
import { useNavigation } from '@react-navigation/native'
import { getAllData } from '../../../service/API/Everything/getAllData'




export const EveryThing = () => {

    const ref = useRef(true)
    const navigation = useNavigation();
    const [values, setAllValues] = useState({

        // 
        dataNewsEverything: [],
        selectCountry: '',
        loadingForData: false,
        visibleModal: false,
        visibleModalLoading: false,
        awaitCategoryNews: '',
        typeNameCategoryNews: '',
        searchNews: '',
        // 
    })

    const {
        dataNewsEverything,
        selectCountry,
        loadingForData,
        visibleModal,
        visibleModalLoading,
        textNews,
        awaitCategoryNews,
        typeNameCategoryNews,
        searchNews } = values


    useEffect(() => {


        getAllData(setAllValues,selectCountry, typeNameCategoryNews, searchNews)


    }, [selectCountry, typeNameCategoryNews, searchNews])


    const publishedAt = (date) => {


        if (date != undefined) {

            const resultSplit = date.split('-')

            resultSplit.pop()

            return `${resultSplit[0]} - ${resultSplit[1]}`

        } else {

            console.log(date);

        }

    }

    // console.log(dataNewsEverything);

    return (

        // console.log(dataNewsEverything)

        <View style={everythingstyle.container}>


            <ScrollView>



                <View style={everythingstyle.accomodateBoxSearch}>

                    <TextInput
                        placeholder="Cari Apa ?"
                        placeholderTextColor="#818181"
                        inlineImageLeft="search"
                        inlineImagePadding={20}
                        style={everythingstyle.boxSearch}
                        onPressOut={() => {

                            navigation.push('Search')

                        }}
                    />

                    <LinearGradient
                        style={everythingstyle.accomodateIconNotif}
                        colors={[
                            '#FF3A44',
                            '#FF8086'
                        ]}
                        onTouchStart={() => {

                            console.log('Tombol Icon Notifikasi Terpencet');
                            navigation.push('NotificationTopHeadline')

                        }}
                    >

                        <Image
                            source={require('../../../assets/Icon/notif.png')}
                        />

                    </LinearGradient>

                </View>






                <View style={everythingstyle.accomodateTextNewsAndSeeAll}>

                    <Text style={everythingstyle.textNews}>Latest News</Text>

                    <Text style={everythingstyle.textSeeAll}>See All</Text>

                </View>





                <ScrollView horizontal style={everythingstyle.accomodateScrollViewForNewsTopHeadline}>

                    {
                        loadingForData ? (

                            <Modal
                                animationType="slide"
                                transparent={true}
                            >

                                <View style={everythingstyle.accomodateModalLoading}>

                                    <LottieView
                                        source={require('../../../assets/LottieFiles/loadingForData.json')}
                                        autoPlay
                                        loop
                                        style={everythingstyle.modalLoading}
                                    />

                                </View>

                            </Modal>

                        ) : (


                            dataNewsEverything.map((values, index) => (

                                <TouchableOpacity
                                    style={everythingstyle.accomodateImageWithTextForNewsTopHeadline}
                                    key={index}
                                    onPress={() => {

                                        navigation.navigate('Detail', {
                                            link: values.url
                                        })

                                    }}
                                >

                                    <Image
                                        source={{ uri: values.urlToImage }}
                                        style={everythingstyle.imageContentForNewsTopHeadline}
                                    />

                                    <View style={everythingstyle.accomodateContentInImageForNewsTopHeadline}>

                                        <Text style={everythingstyle.textAuthorForNewsTopHeadline}>
                                            {values.author}
                                        </Text>

                                        <Text style={everythingstyle.textDescriptionForNewsTopHeadline}>
                                            {values.title}
                                        </Text>

                                        <Text style={everythingstyle.textWordsOfWisdomForNewsTopHeadline}>
                                            {values.description}
                                        </Text>

                                    </View>

                                </TouchableOpacity>

                            )).reverse()


                        )
                    }


                </ScrollView>







                <ScrollView horizontal style={everythingstyle.accomodateSortByNews}>

                    <LinearGradient
                        colors={visibleModal == true ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    // typeNameCategoryNews: 'Filter',
                                    visibleModal: true
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Image
                            source={require('../../../assets/Icon/IconFilter.png')}
                            style={{ tintColor: visibleModal == true ? '#FFF' : '#000' }}
                        />

                        <Text style={[everythingstyle.textSortByNews, { color: visibleModal == true ? '#FFF' : '#000' }]}> Filter</Text>

                    </LinearGradient>


                    <LinearGradient
                        colors={typeNameCategoryNews == 'business' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet');

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'business',
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Text style={[everythingstyle.textSortByNews, { color: values.typeNameCategoryNews == 'business' ? '#FFF' : '#000' }]}>Business</Text>

                    </LinearGradient>

                    <LinearGradient
                        colors={values.typeNameCategoryNews == 'Technology' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'Technology',
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Text style={[everythingstyle.textSortByNews, { color: typeNameCategoryNews == 'Technology' ? '#FFF' : '#000' }]}>Technology</Text>

                    </LinearGradient>

                    <LinearGradient
                        colors={typeNameCategoryNews == 'entertainment' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'entertainment'
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Image

                        />

                        <Text style={[everythingstyle.textSortByNews, { color: typeNameCategoryNews == 'entertainment' ? '#FFF' : '#000' }]}>Entertainment</Text>

                    </LinearGradient>

                    <LinearGradient
                        colors={typeNameCategoryNews == 'general' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'general'
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Text style={[everythingstyle.textSortByNews, { color: typeNameCategoryNews == 'general' ? '#FFF' : '#000' }]}>General</Text>

                    </LinearGradient>

                    <LinearGradient
                        colors={typeNameCategoryNews == 'health' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'health'
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Text style={[everythingstyle.textSortByNews, { color: typeNameCategoryNews == 'health' ? '#FFF' : '#000' }]}>Health</Text>

                    </LinearGradient>


                    <LinearGradient
                        colors={typeNameCategoryNews == 'science' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'science'
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Text style={[everythingstyle.textSortByNews, { color: typeNameCategoryNews == 'science' ? '#FFF' : '#000' }]}>Science</Text>

                    </LinearGradient>

                    <LinearGradient
                        colors={typeNameCategoryNews == 'sports' ? [
                            '#FF3A44',
                            '#FF8086'
                        ] : ['#FFF', '#FFF']}
                        onTouchStart={() => {

                            console.log('Tombol Sort By News Terpencet')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    typeNameCategoryNews: 'sports'
                                }
                            })

                        }}
                        style={everythingstyle.buttonSortByNews}>

                        <Text style={[everythingstyle.textSortByNews, { color: typeNameCategoryNews == 'sports' ? '#FFF' : '#000' }]}>Sports</Text>

                    </LinearGradient>

                </ScrollView>






                <View style={everythingstyle.accomodateAllNews}>


                    {
                        loadingForData ? (

                            <Modal
                                animationType="slide"
                                transparent={true}
                            >

                                <View style={everythingstyle.accomodateModalLoading}>

                                    <LottieView
                                        source={require('../../../assets/LottieFiles/loadingForData.json')}
                                        autoPlay
                                        loop
                                        style={everythingstyle.modalLoading}
                                    />

                                </View>

                            </Modal>

                        ) : (

                            dataNewsEverything.map((value, index) => (

                                <TouchableOpacity
                                    style={everythingstyle.accomodatePerNews}
                                    key={index}
                                    onPress={() => {

                                        navigation.navigate('Detail', {
                                            link: value.url
                                        })

                                    }}
                                >

                                    <Image
                                        source={{ uri: value.urlToImage }}
                                        style={everythingstyle.imagePerNews}
                                    />

                                    <View style={everythingstyle.accomodateContentForForNewsEveryThing}>

                                        <Text style={everythingstyle.textTitleNewsForNewsEveryThing}>{value.title}</Text>

                                        <View style={everythingstyle.accomodateAuthorAndDateForNewsEveryThing}>

                                            <Text style={everythingstyle.textAuthorForNewsEveryThing}>{value.author}</Text>

                                            <Text style={everythingstyle.textDateForNewsEveryThing}>{publishedAt(value.publishedAt)}</Text>

                                        </View>

                                    </View>

                                </TouchableOpacity>

                            ))

                        )


                    }



                </View>


            </ScrollView>




            {/* Modal News  */}

            <Modal
                visible={visibleModal}
                animationType="slide"
                transparent={true}
            >

                <View style={everythingstyle.accomodateModal}>

                    <TouchableOpacity
                        onPress={() => {

                            setAllValues(prev => {

                                return {
                                    ...prev,

                                    visibleModal: false,
                                    // typeNameCategoryNews: ''
                                }
                            })

                        }}
                        style={everythingstyle.accomodateButtonHiddenModal}
                    >

                        <Image
                            source={require('../../../assets/Icon/IconClose.png')}
                        />

                    </TouchableOpacity>


                    <View style={everythingstyle.accomodateFilterAndReset}>

                        <Text style={everythingstyle.textFilter}>Filter</Text>

                        <TouchableOpacity
                            style={everythingstyle.accomodateButtonReset}
                        >

                            <Image
                                source={require('../../../assets/Icon/iconTrash.png')}
                            />

                            <Text style={everythingstyle.textReset}>Reset</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={everythingstyle.accomodateTextSortBy}>

                        <Text style={everythingstyle.textSortBy}>Sort By</Text>

                    </View>

                    <View style={everythingstyle.accomodateCategoryForFilter}>

                        <TouchableOpacity
                            style={[everythingstyle.buttonCategoryForFilter, awaitCategoryNews == 'general' ? { backgroundColor: '#FF3A44' } : null]}
                            onPress={() => {

                                setAllValues(prev => {

                                    return {
                                        ...prev,
                                        awaitCategoryNews: 'general'
                                    }
                                })

                            }}
                        >

                            <Text style={everythingstyle.textCategoryForFilter}>Recommended</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[everythingstyle.buttonCategoryForFilter, awaitCategoryNews == 'business' ? { backgroundColor: '#FF3A44' } : null]}
                            onPress={() => {

                                setAllValues(prev => {

                                    return {
                                        ...prev,
                                        awaitCategoryNews: 'business'
                                    }
                                })

                            }}
                        >

                            <Text style={everythingstyle.textCategoryForFilter}>Latest</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[everythingstyle.buttonCategoryForFilter, awaitCategoryNews == 'entertainment' ? { backgroundColor: '#FF3A44' } : null]}
                            onPress={() => {

                                setAllValues(prev => {

                                    return {
                                        ...prev,
                                        awaitCategoryNews: 'entertainment'
                                    }
                                })

                            }}
                        >

                            <Text style={everythingstyle.textCategoryForFilter}>Most Viewed</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[everythingstyle.buttonCategoryForFilter, awaitCategoryNews == 'health' ? { backgroundColor: '#FF3A44' } : null]}
                            onPress={() => {

                                setAllValues(prev => {

                                    return {
                                        ...prev,
                                        awaitCategoryNews: 'health'
                                    }
                                })

                            }}
                        >

                            <Text style={everythingstyle.textCategoryForFilter}>Channel</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[everythingstyle.buttonCategoryForFilter, awaitCategoryNews == 'science' ? { backgroundColor: '#FF3A44' } : null]}
                            onPress={() => {

                                setAllValues(prev => {

                                    return {
                                        ...prev,
                                        awaitCategoryNews: 'science'
                                    }
                                })

                            }}  
                        >

                            <Text style={everythingstyle.textCategoryForFilter}>Following</Text>

                        </TouchableOpacity>


                    </View>

                    <LinearGradient
                        colors={['#FF3A44', '#FF8086']}
                        style={everythingstyle.accomodateButtonSave}
                        onTouchStart={() => {

                            console.log('Tombol Save')

                            setAllValues(prev => {

                                return {
                                    ...prev,
                                    visibleModal: false,
                                    typeNameCategoryNews: awaitCategoryNews
                                }
                            })

                        }}
                    >

                        <Text style={everythingstyle.textSave}>Save</Text>

                    </LinearGradient>

                </View>

            </Modal>

            {/*  */}

        </View>
    )

}
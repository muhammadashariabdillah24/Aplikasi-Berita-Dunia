import { StyleSheet } from "react-native";


export const topheadlinestyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingVertical: 10
    },

    // Search Item
    accomodateBoxSearch: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    boxSearch: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#818181',
        width: '90%',
        height: 33,
        fontSize: 12,
    },
    accomodateIconNotif: {
        width: 33,
        height: 33,
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    // 

    // Text News And See All
    accomodateTextNewsAndSeeAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10
    },
    textNews: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
    textSeeAll: {
        color: '#0080FF',
        fontSize: 12,
        fontWeight: '600'
    },
    // 

    // Image With Text
    accomodateScrollViewForNewsTopHeadline: {
        marginHorizontal: 10
    },
    accomodateImageWithTextForNewsTopHeadline: {
        width: 321,
        height: 240,
        borderRadius: 8,
    },
    imageContentForNewsTopHeadline: {
        width: 321,
        height: 240,
        position: 'relative',
    },
    accomodateContentInImageForNewsTopHeadline: {
        flexDirection: 'column',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        zIndex: 1,
        width: '100%',
        height: 120,
        maxWidth: '90%'
    },
    textAuthorForNewsTopHeadline: {
        fontSize: 10,
        color: '#FFF',
        fontWeight: '800'
    },
    textDescriptionForNewsTopHeadline: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '700'
    },
    textWordsOfWisdomForNewsTopHeadline: {
        marginTop: 30,
        fontSize: 10,
        color: '#FFF',
        fontWeight: '400'
    },
    // 

    // Sort By News
    accomodateSortByNews: {
        marginTop: 20,
        marginBottom: 10
    },
    buttonSortByNews: {
        paddingHorizontal: 15,
        height: 32,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F0F1FA'
    },
    textSortByNews: {
        fontSize: 12,
        fontWeight: '600',
    },
    // 

    // News
    accomodateAllNews: {
        marginBottom: 10
    },
    accomodatePerNews: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 130,

    },
    imagePerNews: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        position: 'relative'
    },
    accomodateContentForForNewsEveryThing: {
        height: 128,
        alignSelf: 'center',
        padding: 10,
        position: 'absolute',
        zIndex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textTitleNewsForNewsEveryThing: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        top: 0
    },
    accomodateAuthorAndDateForNewsEveryThing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textAuthorForNewsEveryThing: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FFF'
    },
    textDateForNewsEveryThing: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FFF'
    }

})









// container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 10
// },

// // Box News Top Headline
// accomodateNewsTopHeadline: {
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     marginVertical : 10
// },
// imageNewsTopHeadline: {
//     width: '100%',
//     height: 128
// },
// textDate: {
//     fontSize: 12,
//     color: '#2E0505',
//     fontWeight: '300',
//     marginTop : 10,
//     marginBottom : 5
// },
// textContentTitle : {
//     fontSize : 14,
//     color : '#121212',
//     fontWeight : '600',
//     marginTop : 5,
//     marginBottom : 10
// },
// textContentDescription : {
//     fontSize : 14,
//     color : '#121212',
//     fontWeight : '400',
//     marginBottom : 10
// },
// textReadmore : {
//     fontSize : 14,
//     color : '#0080FF',
//     fontWeight : '400',
//     marginBottom : 10
// },
// textPublished : {
//     fontSize : 12,
//     color : '#2E0505',
//     fontWeight : '700',
// }
// // 
import { StyleSheet } from "react-native";

export const everythingstyle = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFF',
        paddingTop : 20
    },

    // Search Item
    accomodateBoxSearch : {
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 10,
    },
    boxSearch : {
        borderRadius : 16,
        borderWidth : 1,
        borderColor : '#818181',
        width : '90%',
        height : 33,
        fontSize : 12,
    },
    accomodateIconNotif : {
        width : 33,
        height : 33,
        borderRadius : 100,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    //

    // Show Modal
    accomodateButtonShowModal : {
        height : '5%',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    viewButtonShowModal : {
        borderRadius : 20,
        borderWidth : 2,
        borderColor : '#000',
        backgroundColor : '#000',
        width : '10%'
    },

    // Accomodate Modal Loading
    accomodateModalLoading : {
        flex : 1,
        backgroundColor : '#FFF',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    modalLoading : {
        width : 200,
        height : 200,
    },
    // 

    // 

    // Hidden Modal
    accomodateButtonHiddenModal : {
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf : 'center'
    },
    
    // Modal Area
    accomodateModal : {
        height : '50%',
        width : '100%',
        zIndex : 1,
        position : 'absolute',
        bottom : 0,
        paddingVertical : 20,
        backgroundColor : '#FFF',
        borderTopLeftRadius : 16,
        borderTopRightRadius : 16,
        borderColor : '#000',
        borderWidth : 1
    },
    accomodateFilterAndReset : {
        borderRadius : 16,
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 10,
        marginVertical : 20,
    },
    textFilter : {
        color : '#041E2F',
        fontSize : 22,
        fontWeight : '700'
    },
    accomodateButtonReset : {
        borderColor : '#000',
        borderWidth : 1,
        borderRadius : 16,
        paddingHorizontal : 15,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    textReset : {
        fontSize : 12,
        fontWeight : '600',
        color : '#000',
        marginHorizontal : 10
    },
    accomodateSortBy : {
        flexDirection : 'column',
        justifyContent : 'flex-start',
        marginBottom : 20
    },
    accomodateTextSortBy : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginHorizontal : 20
    },
    textSortBy : {
        color : '#041E2F',
        fontSize : 14,
        fontWeight : '600'
    },
    accomodateCategoryForFilter : {
        flexDirection : 'row',
        marginVertical : 10,
        flexWrap : 'wrap',
        width : '80%'
    },
    buttonCategoryForFilter : {
        borderColor : '#F0F1FA',
        borderWidth : 1,
        backgroundColor : '#FFFFFF',
        marginHorizontal : 10,
        marginVertical : 5,
        borderRadius : 10,
        paddingHorizontal : 15,
        paddingVertical : 5,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    textCategoryForFilter : {
        color : '#041E2F',
        fontSize : 12,
        fontWeight : '600'
    },
    accomodateButtonSave : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : 15,
        marginVertical : 40,
        borderRadius : 24,
        height : 48,
    },
    textSave : {
        color : '#FFFFFF',
        fontSize : 16,
        fontWeight : '600'
    },

    // Text News And See All
    accomodateTextNewsAndSeeAll : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginVertical : 30,
        marginHorizontal : 10
    },
    textNews : {
        fontSize : 23,
        fontWeight : '700',
        color : '#000',
    },
    textSeeAll : {
        color : '#0080FF',
        fontSize : 15,
        fontWeight : '600'
    },
    // 

    // Image With Text
    accomodateScrollViewForNewsTopHeadline : {
        marginHorizontal : 10
    },
    accomodateImageWithTextForNewsTopHeadline : {
        width : 321,
        height : 240,
        marginHorizontal : 10,
    },
    imageContentForNewsTopHeadline : {
        width : 321,
        height : 240,
        borderRadius : 16,
        position : 'relative',
    },
    accomodateContentInImageForNewsTopHeadline : {
        flexDirection : 'column',
        position : 'absolute',
        alignSelf : 'center',
        bottom : 0,
        width : '100%',
        height : 120,
        maxWidth : '90%'
    },
    textAuthorForNewsTopHeadline : {
        fontSize : 10,
        color : '#FFF',
        fontWeight : '800'
    },
    textDescriptionForNewsTopHeadline : {
        fontSize : 16,
        color : '#FFF',
        fontWeight : '700'
    },
    textWordsOfWisdomForNewsTopHeadline : {
        marginTop : 30,
        fontSize : 10,
        color : '#FFF',
        fontWeight : '400'
    },
    // 

    // Sort By News
    accomodateSortByNews : {
        marginTop : 30,
        marginBottom : 20
    },
    accomodateTitleSortyByNews : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    titleSortByNews : {
        fontSize : 20,
        color : '#000',
        fontWeight : '800'
    },
    buttonSortByNews : {
        paddingHorizontal : 15,
        height : 32,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center',
        marginHorizontal : 15,
        borderRadius : 16,
        borderWidth : 1,
        borderColor : '#F0F1FA'
    },
    textSortByNews : {
       fontSize : 12,
       fontWeight : '600',
    },
    // 

    // News
    accomodateAllNews : {
        marginBottom : 10
    },
    accomodatePerNews : {
        marginHorizontal : 10,
        marginVertical : 10,
        height : 130,

    },
    imagePerNews : {
        width : '100%',
        height : '100%',
        borderRadius : 8,
        position : 'relative'
    },
    accomodateContentForForNewsEveryThing : {
        height : 128,
        alignSelf : 'center',
        padding : 10,
        position : 'absolute',
        zIndex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    textTitleNewsForNewsEveryThing : {
        color : '#CACACA',
        fontSize : 14,
        fontWeight : '600',
        top : 0,
    },
    accomodateAuthorAndDateForNewsEveryThing : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    textAuthorForNewsEveryThing : {
        fontSize : 12,
        fontWeight : '600',
        color : '#CACACA'
    },
    textDateForNewsEveryThing : {
        fontSize : 12,
        fontWeight : '600',
        color : '#CACACA'
    }
})
import { StyleSheet } from "react-native";


export const searchstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10
    },
    accomodateBoxSearch : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 5,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 1,
        shadowRadius : 1,
        elevation : 1
    },
    boxSearch : {
        width : '90%',
        color : '#818181',
        fontSize : 15
    },
    buttonX : {
        width : '10%',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    accomodateSearchResult : {
        width : '100%',
        borderBottomColor : 'rgba(0, 0, 0, 0.3)',
        borderBottomWidth : 1,
        marginVertical : 10,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    textSearchResult : {
        color : '#818181',
        fontSize : 15,
        lineHeight : 20,
    }


})
import { StyleSheet } from "react-native";

export const detailstyle = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFF'
    },
    accomodateImageForDetail : {
        height : '50%',
        width : '100%'
    },
    imageForDetail : {
        height : '100%',
        width : '100%',
        position : 'relative'
    },
    accomodateIconArrowBack : {
        position : 'absolute',
        backgroundColor : 'rgba(245, 245, 245, 0.5)',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        top : 20,
        left : 10,
        paddingHorizontal : 10, 
        paddingVertical : 10
    },
    content : {
        width : 311,
        height : 141,
        backgroundColor : 'rgba(245, 245, 245, 0.5)',
        alignSelf : 'center',
        borderRadius : 16,
        flexDirection : 'column',
        position : 'absolute',
        zIndex : 1,
        bottom : 0
    },
    accomodateDescription : {
        height : '60%',
        backgroundColor : '#FFF',
        position : 'absolute',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        bottom : 0,
        paddingHorizontal : 10,
        paddingTop : 100,
        paddingBottom : 10
    },
    textDescrtiption : {
        letterSpacing : 1,
        color : '#2E0505',
    }

})
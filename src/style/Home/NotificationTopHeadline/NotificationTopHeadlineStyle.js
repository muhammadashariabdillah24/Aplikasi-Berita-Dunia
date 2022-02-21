import { StyleSheet } from "react-native";


export const notificationstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10
    },

    // Box News Top Headline
    accomodateNewsTopHeadline: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginVertical: 20,
        shadowColor : '#000',
        shadowOffset : {
            width : 10,
            height : 10
        },
        shadowOpacity : 10,
        shadowRadius : 10,
        elevation : 10
    },
    imageNewsTopHeadline: {
        width: '100%',
        height: 128,
        borderRadius : 10
    },
    textDate: {
        fontSize: 12,
        color: '#2E0505',
        fontWeight: '300',
        marginTop: 10,
        marginBottom: 5
    },
    textContentTitle: {
        fontSize: 14,
        color: '#121212',
        fontWeight: '600',
        marginTop: 5,
        marginBottom: 10,
        letterSpacing : 1
    },
    textContentDescription: {
        fontSize: 14,
        color: '#121212',
        fontWeight: '400',
        marginBottom: 10,
        letterSpacing : 1
    },
    textReadmore: {
        fontSize: 14,
        color: '#0080FF',
        fontWeight: '400',
        marginBottom: 10
    },
    textPublished: {
        fontSize: 12,
        color: '#2E0505',
        fontWeight: '700',
    }
    // 
})
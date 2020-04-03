import { StyleSheet } from 'react-native';
import { scaledHeight } from './Utils';

const styles = StyleSheet.create({
   
container: {
        alignSelf: 'stretch',
        flex: 1
    },
 safeAreaViewContainer: {
        backgroundColor: "#194C7D",
        flex: 0,
    },
    childrenContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#F7F7F7',
        flex: 1,
        flexDirection:'column'
    },
     viewContainer: {
        alignSelf: 'stretch',
        flex: 1,
        paddingVertical: scaledHeight(30)
    },
     layoutContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        bottom: '4%',
        flex: 1,
        left: '4%',
        position: 'absolute',
        right: '4%',
        top: scaledHeight(90),

    },
    titleBarContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#194C7D',
        height: scaledHeight(126)
    },
     titleBarContent: {
        flexDirection: 'row',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(30),
    },
     touchableStyle: {
        alignSelf: 'center'
    },
     arrowIconStyle: {
        alignSelf: 'center',
        width:20,
        height:20,
        marginLeft: '2%',
        marginRight: '2%'
    },
 titlebarTitleText: {
        color: "#FFFFFF",
        fontFamily : 'BentonSans Bold',
        fontSize: scaledHeight(24),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginRight: '2%',
        textAlign: 'center'
    },
     cornerTriangleTopLeft: {
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: scaledHeight(30),
        borderStyle: 'solid',
        borderTopColor: '#8BC105',
        borderTopWidth:  scaledHeight(30),
        height: 0,
        position: "absolute",
        top: 0,
        transform: [
            { rotate: '0deg' }
        ],
        width: 0
    },
     cornerTriangleBottomRight: {
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: scaledHeight(15),
        borderStyle: 'solid',
        borderTopColor: '#8BC105',
        borderTopWidth: scaledHeight(15),
        bottom: 0,
        height: 0,
        position: "absolute",
        right: 0,

        transform: [
            { rotate: '180deg' }
        ],
        width: 0
    },
    buttonStyle:{
          alignItems:'center',
          backgroundColor:"#486D90",
          borderRadius:1,
          height:scaledHeight(40),
          justifyContent: "center",
          width:'90%',
          alignSelf:'center'
    },
    bottomView: {
        alignItems: 'center',
        alignSelf: 'stretch',
        bottom: 0,
        height: scaledHeight(50),
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
    },
     radioButtonLayout : {
            flexDirection: "row", 
            marginBottom : '2%',
           marginTop : '5%',
           width : '92%',
    },
     outerCircle : {
            alignItems: 'center',
            borderColor: '#707070',
            borderRadius: scaledHeight(16),
            borderWidth: scaledHeight(2),
            height: scaledHeight(32),
            justifyContent: 'center',
            width: scaledHeight(32),
        },
         innerCircle : {
            backgroundColor: '#194C7D',
            borderRadius: scaledHeight(6),
            height: scaledHeight(12),
            width: scaledHeight(12)
        },
         questionsSection : {
            flexDirection:'column',        
            height:scaledHeight(50), 
            marginLeft : '5%',
            width: '90%',
        },
        questionsText : {
            color : '#333333DE',
            fontSize : scaledHeight(16)
        },
         additionalText : {
            alignItems:'flex-start',
            color : '#333333DE',
            fontSize : scaledHeight(12),
            marginTop:"5%"
        },
    
});

export default styles;
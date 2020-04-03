import React from 'react';
import {View, StatusBar,TouchableOpacity, Image, Text} from 'react-native';
import styles from './CommonStyles';


const GTitleBarComponent = props => {
    const {titlebarTitle,onPress} = props;
    return (
        <View style={styles.titleBarContainer}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
            <View style={styles.titleBarContent}>
               
                        <TouchableOpacity style={styles.touchableStyle}  
                            accessibilityRole="button"
                            onPress={onPress}
                            >                      
                           
                           {/* <Image style={styles.arrowIconStyle} source={require('./../../assets/backArrow.png')} /> */}
                           
                        </TouchableOpacity>
                   
            
                <Text style={styles.titlebarTitleText} accessibilityLabel='title'>
                    {titlebarTitle}
                </Text>
            </View>
        </View>
    );
};

export default GTitleBarComponent;
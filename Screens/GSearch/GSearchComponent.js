import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Platform, TouchableOpacity,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './CommonStyles';
import GTitleBarComponent from './GTitleBarComponent';
import GInputComponent from './GInputComponent';

export default class GSearchComponent extends React.Component {
   constructor(props){
       super(props);
       this.state = {searchKey:""};
   }
   onChangeText = searchKey => {
     this.setState({searchKey});
   }
   onPress = () =>{

   }
    render() {
        const {searchKey} = this.state;
        return (
                <View style={styles.childrenContainer}>
                      <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={styles.container}
    >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.titleBarContainer}>
                        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
                        <View style={styles.titleBarContent}>
                        
                                    <TouchableOpacity style={styles.touchableStyle}  
                                        accessibilityRole="button"
                                        onPress={this.onPress}
                                        >                      
                                    
                                    {/* <Image style={styles.arrowIconStyle} source={require('./../../assets/backArrow.png')} /> */}
                                    
                                    </TouchableOpacity>
                            
                                    <GInputComponent returnKeyType="search" onChangeText={this.onChangeText} value={searchKey}/>
                          
                        </View>
                 </View>
                 






                 </TouchableWithoutFeedback>
                 </KeyboardAvoidingView>
           </View>
        );
    }



}
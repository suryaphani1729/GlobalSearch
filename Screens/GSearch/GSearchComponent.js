import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import styles from './CommonStyles';
import GTitleBarComponent from './GTitleBarComponent';

export default class GSearchComponent extends React.Component {

    render() {
        return (
                <View style={styles.childrenContainer}>
                 <GTitleBarComponent titlebarTitle="Live Chat"/>
                 <Text>Hello world</Text>
           </View>
        );
    }



}
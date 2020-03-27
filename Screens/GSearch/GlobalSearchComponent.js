import React, {Component} from 'react';
import { Text, View, TextInput, Platform, Keyboard, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import styles from './Styles';

export default class GlobalSearchComponent extends Component {
 constructor(props){
   super(props);
   this.state = {searchText: "", suggestions: props.suggestions.suggestion,
                searchResult: [],
                showSuggestions: false,
  }; 

 }
 
 onSearchTextChange = searchText => this.setState({searchText, showSuggestions: searchText.length>=3});
 onSuggestionSelect = selectedText => {
   this.setState({showSuggestions:false,searchText:selectedText});
   this.onSearchSubmit();
 }
 onSearchSubmit = () => {
   this.setState({showSuggestions: false,searchResult: this.props.searchResult});
 }
  render() {
    const {searchText, searchResult, suggestions, showSuggestions} = this.state;
    return (
      <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
    <Text>{searchText}{this.props.sample}</Text>
           <TextInput placeholder="Search text"
           value={searchText}
           returnKeyType="search"
           onSubmitEditing={this.onSearchSubmit}
           onChangeText = {this.onSearchTextChange}
           />
           {
            showSuggestions ? 
           <View style={styles.suggestionView}>
             {
               suggestions.map((item)=><TouchableOpacity onPress={()=>this.onSuggestionSelect(item)}><Text key={item} style={styles.suggestionText}>{item}</Text></TouchableOpacity>)
             }

           </View> : null
            }

            {
              searchResult.map(item =>  <View>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
            </View>)
            }
           
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}



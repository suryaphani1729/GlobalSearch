import React, {Component} from 'react';
import { Text, View, TextInput, Platform, Keyboard, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import styles from './Styles';

export default class GlobalSearchComponent extends Component {
 constructor(props){
   super(props);
   this.state = {searchText: "", suggestions: [],
                searchResult: [],
                showSuggestions: false,
                filterKeys: ["All"]
  }; 

 }
 
 onSearchTextChange = searchText => {
  const {getSuggestionAction} = this.props;
  if(searchText.length>=3){
    getSuggestionAction(searchText);
    this.setState({searchText, showSuggestions: searchText.length>=3});
  }
  else{
    this.setState({searchText});
  }
  
 } 
 onSuggestionSelect = selectedText => {
   this.setState({showSuggestions:false,searchText:selectedText});
   this.onSearchSubmit();
 }
 onSearchSubmit = () => {

  const {SearchActions} = this.props;
  const {searchText} = this.state;

   SearchActions(searchText);

   this.setState({showSuggestions: false});

 }
  render() {
    const {searchText, showSuggestions} = this.state;
    const {suggestions,searchResult} = this.props;
    const filterKeys = Object.keys(searchResult);
    
    console.log("render",this.props);
    
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
               suggestions.suggestion.map((item)=><TouchableOpacity onPress={()=>this.onSuggestionSelect(item)}><Text key={item} style={styles.suggestionText}>{item}</Text></TouchableOpacity>)
             }

           </View> : null
            }

            {
               filterKeys.length>0 &&  filterKeys.map(key => {

               return searchResult[key] && searchResult[key].map(item =>  <View>
                  <Text>{item.pageTitle}</Text>
               <Text>{item['description'] && item.description}</Text>
              </View>)



              })
             
            }
           
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}



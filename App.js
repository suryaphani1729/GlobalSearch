// You can import from local files
import React from 'react';
import { Provider } from "react-redux";
//  import { createAppContainer } from '@react-navigation/native';
//  import { createStackNavigator } from '@react-navigation/stack';
 import GlobalSearchComponent from './Screens/GSearch';
 import GSearchComponent from './Screens/GSearch/GSearchComponent';
 
 import store from './Screens/GSearch/State/store';

// const AppNavigator = createStackNavigator({
//   GlobalSearch: {
//         screen: GlobalSearchComponent,
//         navigationOptions: {
//             header: null,
//         }
//     },
//     },
//     {
//         initialRouteName: "GlobalSearch"
//     });




class App extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <GlobalSearchComponent />
            </Provider>
        )
    }
}
export default GSearchComponent; //createAppContainer(AppNavigator);

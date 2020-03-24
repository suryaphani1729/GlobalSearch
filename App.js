// You can import from local files
 import { createAppContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import GlobalSearchComponent from './Screens/GSearch/GlobalSearchComponent';

const AppNavigator = createStackNavigator({
  GlobalSearch: {
        screen: GlobalSearchComponent,
        navigationOptions: {
            header: null,
        }
    },
    },
    {
        initialRouteName: "GlobalSearch"
    });

export default createAppContainer(AppNavigator);

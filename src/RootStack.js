import { createStackNavigator } from 'react-navigation';
import Feedback from './Feedback';
import Settings from './Settings';
import BoardCreation from './BoardCreation';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackTitle: 'Menu',
  },
    },
    Details: {
      screen: DetailsScreen,
    },
    BoardCreation: {
      screen: BoardCreation
    },
    Credits: {
      screen: Settings
    },
    Feedback: {
      screen: Feedback
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;

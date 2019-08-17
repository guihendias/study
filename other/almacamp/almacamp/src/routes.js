import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Members from './pages/Dashboard/Members';
import MemberDetails from './pages/Dashboard/Members/Details';
import Profile from './pages/Dashboard/Profile';
import Library from './pages/Dashboard/Library';
import Stores from './pages/Dashboard/Stores';
import StoreDetails from './pages/Dashboard/Stores/Details';

const SignUp = createStackNavigator({
  Login,
});

const Main = createStackNavigator(
  {
    Dashboard,
    Library,
    Profile,
    Members,
    MemberDetails,
    Stores,
    StoreDetails,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#252525',
      },
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    },
  }
);

export default isSigned =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignUp,
        Main,
      },
      {
        initialRouteName: isSigned ? 'Main' : 'SignUp',
      }
    )
  );

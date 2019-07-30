import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Podcast from '~/pages/Podcast';

const Routes = createAppContainer(
  createStackNavigator({ Login, Main, Podcast }, { defaultNavigationOptions: { header: null } }),
);

export default Routes;

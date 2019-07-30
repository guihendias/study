import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerMode: 'none',
    }
  )
);

export default Routes;

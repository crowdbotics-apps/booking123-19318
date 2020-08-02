import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item86787Navigator from '../features/Add-Item86787/navigator';
import Maps86783Navigator from '../features/Maps86783/navigator';
import UserProfile86779Navigator from '../features/UserProfile86779/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item86787: { screen: Add-Item86787Navigator },
Maps86783: { screen: Maps86783Navigator },
UserProfile86779: { screen: UserProfile86779Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

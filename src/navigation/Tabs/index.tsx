import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stacks/HomeStack';
import AccountStack from '../Stacks/AccountStack';
import OrderStack from '../Stacks/OrderStack';
import FavoriteStack from '../Stacks/FavoriteStack';
import {calcFont} from '../../common/styles';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import AppIcon from '../../component/atoms/AppIcon';
import {Trans} from '../../i18n';
import ICONS from '../../common/icons';
const Tab = createBottomTabNavigator();
const TabsOptions: any = () => ({
  Home: {
    icon: ICONS.home,
    label: Trans('home'),
    size: calcFont(25),
  },
  Orders: {
    icon: ICONS.mail,
    label: Trans('orders'),
    size: calcFont(25),
  },
  Favorite: {
    icon: ICONS.star,
    label: Trans('favorite'),
    size: calcFont(25),
  },
  Account: {
    icon: ICONS.account,
    label: Trans('account'),
    size: calcFont(25),
  },
});
export default function Tabs() {
  const TabsData = TabsOptions(Trans);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: TabsData[route.name].label,
        tabBarIcon: options => (
          <AppIcon
            icommon
            name={TabsData[route.name].icon}
            color={options.color}
            size={TabsData[route.name].size}
          />
        ),
      })}
      tabBarOptions={{
        tabStyle: {backgroundColor: COLORS.white},
        activeTintColor: COLORS.dodgerBlue,
        inactiveTintColor: COLORS.blueGrey,
        labelPosition: 'below-icon',
        labelStyle: {fontSize: calcFont(10)},
        allowFontScaling: true,
      }}
      initialRouteName="HomeTab">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Favorite" component={FavoriteStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
}

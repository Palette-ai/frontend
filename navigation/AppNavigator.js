import React from 'react'
import ProfileScreen from '../pages/Profile'
//import RestaurantScreen from '../pages/Restaurants'
import LikedDishesScreen from '../pages/LikedDishes'
import MapScreen from '../pages/Map'
import DiscoverStackScreen from '../navigation/DishNavigator';
import MapStackScreen from '../navigation/MapNavigator';
import SearchScreen from '../pages/Search'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'

const { Navigator, Screen } = createBottomTabNavigator();
import {
  HomeIcon, HomeIconFilled,
  MapIcon, MapIconFilled,
  StarIcon, StarIconFilled,
  PersonIcon, PersonIconFilled,
  SearchIcon, SearchIconFilled
} from './NavIcons';

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab style={{ marginVertical: 10 }} title='DISCOVER' icon={state.index === 0 ? HomeIconFilled : HomeIcon} />
    <BottomNavigationTab title='SEARCH' icon={state.index == 1 ? SearchIconFilled : SearchIcon } />
    <BottomNavigationTab title='MAP' icon={state.index === 2 ? MapIconFilled : MapIcon} />
    <BottomNavigationTab title='LIKED' icon={state.index === 3 ? StarIconFilled : StarIcon} />
    <BottomNavigationTab title='PROFILE' icon={state.index === 4 ? PersonIconFilled : PersonIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Discover' component={DiscoverStackScreen} />
    <Screen name='Search' component={SearchScreen} />
    <Screen name='Map' component={MapStackScreen} />
    <Screen name='LikedDishes' component={LikedDishesScreen} />
    <Screen name='Profile' component={ProfileScreen} />
  </Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator />
    </NavigationContainer>
  );
};
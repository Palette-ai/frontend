import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ProfileScreen from '../pages/Profile'
import SocialScreen from '../pages/Social'
import MapScreen from '../pages/Map'
import DiscoverStackScreen from '../navigation/DishNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='DISCOVER'/>
    <BottomNavigationTab title='MAP'/>
		<BottomNavigationTab title='SOCIAL'/>
    <BottomNavigationTab title='PROFILE'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Discover' component={DiscoverStackScreen}/>
		<Screen name='Map' component={MapScreen}/>
    <Screen name='Social' component={SocialScreen}/>
		<Screen name='Profile' component={ProfileScreen}/>
  </Navigator>
);

export default function AppNavigator() {
  return (
	<NavigationContainer independent={true}>
    <TabNavigator/>
  </NavigationContainer>
	);
};
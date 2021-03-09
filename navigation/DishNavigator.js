import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DiscoverScreen from '../pages/Discover'
import DishScreen from '../pages/Dish';

const Stack = createStackNavigator();
export default function HomeStackScreen() {
	return (
		<Stack.Navigator   
			screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name="Discover" component={DiscoverScreen} />
			<Stack.Screen name="Dish" component={DishScreen} />
		</Stack.Navigator>
	);
}
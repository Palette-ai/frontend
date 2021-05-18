import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RestaurantScreen from '../pages/Restaurants'
import MapScreen from '../pages/Map';

const Stack = createStackNavigator();
export default function MapStackScreen() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="MapScreen" component={MapScreen} />
			<Stack.Screen name="Restaurant" component={RestaurantScreen} />
		</Stack.Navigator>
	);
}
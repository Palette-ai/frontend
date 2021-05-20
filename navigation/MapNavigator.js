import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RestaurantScreen from '../pages/Restaurant'
import MapScreen from '../pages/Map';
import DishScreen from '../pages/Dish'

const Stack = createStackNavigator();
export default function MapStackScreen() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="MapScreen" component={MapScreen} />
			<Stack.Screen name="Restaurant" component={RestaurantScreen} />
			<Stack.Screen name="Dish" component={DishScreen} />
		</Stack.Navigator>
	);
}
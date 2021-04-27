import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DiscoverScreen from '../pages/Discover'
import DishScreen from '../pages/Dish'
import RestaurantScreen from '../pages/Restaurant'

const Stack = createStackNavigator();
export default function HomeStackScreen() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="Discover" component={DiscoverScreen} />
			<Stack.Screen name="Dish" component={DishScreen} />
			<Stack.Screen name="Restaurant" component={RestaurantScreen} />
		</Stack.Navigator>
	);
}
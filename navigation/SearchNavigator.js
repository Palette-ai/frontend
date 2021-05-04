import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from '../pages/Search'
import DishScreen from '../pages/Dish'
import RestaurantScreen from '../pages/Restaurants'

const Stack = createStackNavigator();
export default function SearchStackScreen() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="Search" component={SearchScreen} />
			<Stack.Screen name="Dish" component={DishScreen} />
			<Stack.Screen name="Restaurant" component={RestaurantScreen} />
		</Stack.Navigator>
	);
}
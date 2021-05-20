import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LikedDishesScreen from '../pages/LikedDishes'
import DishScreen from '../pages/Dish'
import RestaurantScreen from '../pages/Restaurant'

const Stack = createStackNavigator();
export default function LikeStackScreen() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="Discover" component={LikedDishesScreen} />
			<Stack.Screen name="Dish" component={DishScreen} />
			<Stack.Screen name="Restaurant" component={RestaurantScreen} />
		</Stack.Navigator>
	);
}
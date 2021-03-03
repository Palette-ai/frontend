import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import DishScreen from '../pages/Dish';

const Stack = createStackNavigator();
export default function HomeStackScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Dish" component={DishScreen} />
		</Stack.Navigator>
	);
}
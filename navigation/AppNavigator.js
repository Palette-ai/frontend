import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-bottom-tabs-no-warnings'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Profile from '../pages/Profile'
import Social from '../pages/Social'
import Map from '../pages/Map'
import DiscoverStackScreen from '../navigation/DishNavigator';

const Tab = createBottomTabNavigator()
export default function AppNavigator() {
	return (
		<Tab.Navigator>

			<Tab.Screen
				name={'Discover'}
				component={DiscoverStackScreen}
				options={{
					tabBarIcon: ({ color, size }) =>
						<MaterialCommunityIcons name="cloud-search-outline" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name={'Map'}
				component={Map}
				options={{
					tabBarIcon: ({ color, size }) =>
						<MaterialCommunityIcons name="account-group" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name={'Social'}
				component={Social}
				options={{
					tabBarIcon: ({ color, size }) =>
						<MaterialCommunityIcons name="account-group" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name={'Profile'}
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) =>
						<MaterialCommunityIcons name="account" color={color} size={size} />
				}}
			/>
		</Tab.Navigator>
	)
}
import React from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { GET_ALL_DISHES } from '../queries/dishes';

import Search from '../components/Discover/Search'
import DishCard from '../components/Discover/DishCard';

const Discover = ({ navigation }) => {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { dishMany: dishes } = data

	return (
		<View syle={styles.container}>
			{/* TODO: Replace search UI with search and filter functionality */}
			<Search />
			<View style={styles.item_container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{data.dishMany.map(dish => (
						<TouchableOpacity
							activeOpacit={0.1}
							onPress={() => navigation.navigate('Dish', { dish, navigation })}
							key={dish._id}
						>
							<DishCard dish={dish} />
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FDFCFC',
	},
	item_container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: '#FDFCFC',
	},
	score_circle: {
		borderRadius: 100,
		width: 40,
		height: 40,
		backgroundColor: '#F7B300',
	},
	footer_container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FDFCFC',
	}
});

export default Discover

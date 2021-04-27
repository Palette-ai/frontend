import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Like from '../components/Liked/Like'
import DishCard from '../components/Discover/DishCard';
import firebase from 'firebase/app';
import mongoose from 'mongoose';
import axios from 'axios';
import { GET_SOME_DISHES } from '../queries/dishes';
import { USER_LIKES} from '../queries/users';
import { useQuery } from '@apollo/client';

const LikedDishes = ({ navigation }) => {
	const [{ loading, error, data }] = useQuery(USER_LIKES)

	const userIDString = firebase.auth().currentUser.photoURL;
	
	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Not good why did it break...</Text>
	console.log(data.userById.likes)
	return (
			<View syle={styles.container}>
				{/* TODO: Replace search UI with search and filter functionality */}
				<Like />
				<View style={styles.item_container}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{data.userById.likes.map(dish => (
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

export default LikedDishes

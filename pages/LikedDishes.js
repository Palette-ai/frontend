import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Like from '../components/Liked/Like'
import DishCard from '../components/Discover/DishCard';
import firebase from 'firebase/app';
import mongoose from 'mongoose';
import axios from 'axios';
import { GET_SOME_DISHES } from '../queries/dishes';
import { useLazyQuery } from '@apollo/client';

const LikedDishes = ({ navigation }) => {
	const [getDishes, { loading, data, error }] = useLazyQuery(GET_SOME_DISHES)

	const userIDString = firebase.auth().currentUser.photoURL;
	useEffect(() => {
		axios.post("https://palette-backend.herokuapp.com/rec", {
			user_id: userIDString
		})
			.then(res => {
				getDishes({
					variables: {
						_ids: res.data.map(d => mongoose.Types.ObjectId(d))
					},
				})
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Not good why did it break...</Text>

	return !data ?
	(
		<View syle={styles.container}>
			<View>
				<Like/>
				<View style={styles.item_container}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{data.dishByIds.map(dish => (
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
});

export default LikedDishes

import React, { useState, useMemo, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useMutation, useQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { GET_ALL_DISHES, GET_SOME_DISHES } from '../queries/dishes';
import firebase from 'firebase/app';
import mongoose from 'mongoose';


import Search from '../components/Discover/Search'
import DishCard from '../components/Discover/DishCard';

import axios from 'axios';

const Discover = ({ navigation }) => {

	const [dishRecs, setDishRecs] = useState('')

	const userIDString = firebase.auth().currentUser.photoURL;
	axios.post("https://palette-backend.herokuapp.com/rec", {
		user_id: userIDString
	})
	.then(res => {
		let recDishes = res.data.map(d => mongoose.Types.ObjectId(d))
		setDishRecs(recDishes)
	})
	.catch(e => {
		console.log(e)
	})

	const { loading, error, data } = useQuery(GET_SOME_DISHES, {
		variables: {
			_ids: dishRecs
		},
		})

	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Not good why did it break...</Text>

	return (
		<View syle={styles.container}>
			{/* TODO: Replace search UI with search and filter functionality */}
			<Search />
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

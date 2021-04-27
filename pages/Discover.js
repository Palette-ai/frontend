import React, { useState, useMemo, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useLazyQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase/app';
import mongoose from 'mongoose';
import LottieView from 'lottie-react-native';

import { GET_ALL_DISHES, GET_SOME_DISHES } from '../queries/dishes';
import { USER_LIKED_DISHES } from '../queries/users';


import Search from '../components/Discover/Search'
import DishCard from '../components/Discover/DishCard';
import axios from 'axios';

const Discover = ({ navigation }) => {
	const [id, setID] = useState(firebase.auth().currentUser.photoURL)
	const userID = firebase.auth().currentUser.photoURL;
	const [getDishes, { loading, data, error }] = useLazyQuery(GET_SOME_DISHES)
	// Get list of dishes that the user has liked
	const [getLikedDishes, { loading: likedLoading, error: likedError, data: likedData }] = useLazyQuery(USER_LIKED_DISHES)
	const [likedSet, setLikedSet] = useState(new Set())

	useEffect(() => {
		navigation.setParams({ previous_page: 'Discover' })
		axios.post("https://palette-backend.herokuapp.com/rec", {
			user_id: userID
		})
			.then(res => {
				// Get list of dishes
				getDishes({
					variables: {
						_ids: res.data.map(d => mongoose.Types.ObjectId(d))
					}
				})
				getLikedDishes({
					variables: {
						_id: mongoose.Types.ObjectId(userID)
					}
				})
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	useEffect(() => {
		if (likedData !== undefined && !likedLoading) {
			// console.log(likedData.userById.liked_dishes)
			setLikedSet(new Set(likedData.userById.liked_dishes.map(dish => String(dish))))
		}
	}, [likedData])
	//if (likedSet.size !== 0) console.log(likedSet);


	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Not good why did it break...</Text>
	return !data ?
		//Animation if data isn't loaded yet
		<View syle={styles.container}>
			{/* TODO: Replace search UI with search and filter functionality */}
			<Search />
			<View style={styles.item_container}>
				<LottieView
					autoPlay
					loop
					source={require('../styles/l.json')}
					style={styles.animationContainer}
				/>
			</View>
		</View>
		:
		// Data successfully loaded
		(
			<View syle={styles.container}>
				{/* TODO: Replace search UI with search and filter functionality */}
				<Search />
				<View style={styles.item_container}>
					<ScrollView showsVerticalScrollIndicator={false} marginBottom={'63%'}>
						{data.dishByIds.map(dish => (
							<TouchableOpacity
								activeOpacit={0.1}
								onPress={() => navigation.navigate('Dish', { dish, navigation })}
								key={dish._id}
							>
								<DishCard
									dish={dish}
									userID={userID}
									likedSet={likedSet}
								/>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</View>
		)
}

const styles = StyleSheet.create({
	animationContainer: {
		marginTop: -90,
		alignItems: "flex-start",
		justifyContent: 'flex-start',
		flex: 1,
	},
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

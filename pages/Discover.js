import React, { useState, useMemo, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useMutation, useLazyQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase/app';
import mongoose from 'mongoose';
import LottieView from 'lottie-react-native';

import { GET_ALL_DISHES, GET_SOME_DISHES } from '../queries/dishes';


import Search from '../components/Discover/Search'
import DishCard from '../components/Discover/DishCard';

import axios from 'axios';

const Discover = ({ navigation }) => {
	// const [id, setID] = useState(firebase.auth().currentUser.photoURL)
	const userID = firebase.auth().currentUser.photoURL;
	const [getDishes, { loading, data, error }] = useLazyQuery(GET_SOME_DISHES)
	// Get list of dishes that the user has liked
	const [getLikedDishes, { loading: likedLoading, error: likedError, data: likedData }] = useLazyQuery(USER_LIKED_DISHES)
	const [likedSet, setLikedSet] = useState(new Set())
	const [userIDString, setuserIDString] = useState(firebase.auth().currentUser.photoURL)
	useEffect(() => {
		let waitUntilIDIsInFirebase = setTimeout(() => setuserIDString(firebase.auth().currentUser.photoURL), 500)
		if (userIDString !== null) axios.post("https://palette-backend.herokuapp.com/rec", {
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
		return () => clearTimeout(waitUntilIDIsInFirebase)
	}, [userIDString, data])

	useEffect(() => {
		if (likedData !== undefined && !likedLoading) {
			// console.log(likedData.userById.liked_dishes)
			setLikedSet(new Set(likedData.userById.liked_dishes.map(dish => String(dish))))
		}
	}, [likedData])
	//if (likedSet.size !== 0) console.log(likedSet);

	if (loading || userIDString === null || data == undefined) return <View syle={styles.container}>
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
	if (error) return <Text>Not good why did it break...</Text>
	if (data) return (
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
							<DishCard dish={dish} />
						</TouchableOpacity>
					))}
				</ScrollView>
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
									userID={userIDString}
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

import React, { useState, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useLazyQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native'
import firebase from 'firebase/app';
import mongoose from 'mongoose';
import LottieView from 'lottie-react-native';
import axios from 'axios'

import Error from '../components/Error'
import { GET_SOME_DISHES } from '../queries/dishes';
import { USER_LIKED_DISHES } from '../queries/users';
import Title from '../components/Discover/Title'
import DishCard from '../components/Discover/DishCard';


const Discover = ({ navigation }) => {
	const [getDishes, { loading, data, error }] = useLazyQuery(GET_SOME_DISHES)
	const [recBois, setRecBois] = useState('')
	const [dishRecThings, setDishRecThings] = useState('')
	const [userIDString, setuserIDString] = useState(firebase.auth().currentUser.photoURL)

	// Get list of dishes that the user has liked
	const [getLikedDishes, { loading: likedLoading, error: likedError, data: likedData }] = useLazyQuery(USER_LIKED_DISHES)
	const [likedSet, setLikedSet] = useState(new Set())

	useEffect(() => {
		let waitUntilIDIsInFirebase = setTimeout(() => setuserIDString(firebase.auth().currentUser.photoURL), 500)
		if (userIDString !== null) axios.post("https://palette-backend.herokuapp.com/rec", {
			user_id: userIDString
		})
			.then(res => {
				setRecBois(res.data)
				getDishes({
					variables: {
						_ids: res.data.map(d => mongoose.Types.ObjectId(d))
					},
				})
				getLikedDishes({
					variables: {
						_id: mongoose.Types.ObjectId(userIDString)
					}
				})
			})
			.catch(e => {
				console.log(e)
			})

		return () => clearTimeout(waitUntilIDIsInFirebase)
	}, [userIDString, data])

	useEffect(() => {
		if (data !== undefined && recBois !== undefined && !loading && !error) {
			// console.log("do you fucking work", data.dishByIds)
			setDishRecThings(
				data.dishByIds.slice().sort((a, b) => {
					return recBois.indexOf(a._id) - recBois.indexOf(b._id)
				})
			)
		}
	}, [data])

	useEffect(() => {
		if (likedData !== undefined && !likedLoading) {
			setLikedSet(new Set(likedData.userById.liked_dishes.map(dish => String(dish))))
		}
	}, [likedData])

	if (error) return <Error />
	if (loading || userIDString === null || dishRecThings == '') return (
		<View style={{ backgroundColor: '#FDFCFC', height: '100%', }}>
			<Title text={'Recommendations'} />
			<LottieView
				autoPlay
				loop
				source={require('../styles/l.json')}
				style={styles.animationContainer}
			/>
		</View>)
	if (dishRecThings) return (
		<View style={{ backgroundColor: '#FDFCFC', height: '100%' }}>
			<Title text={'Recommendations'} />
			<View style={styles.item_container}>
				<ScrollView showsVerticalScrollIndicator={false} marginBottom={'56%'} style={{ height: '100%' }}>
					{dishRecThings.map(dish => (
						<TouchableOpacity
							activeOpacity={0.1}
							onPress={() => navigation.navigate('Dish', { dish })}
							key={dish._id}
						>
							<DishCard
								dish={dish}
								userID={userIDString}
								likedSet={likedSet}
								key={dish._id}
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
		backgroundColor: '#FDFCFC',
	}
});

export default Discover

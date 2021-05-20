import React, { useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, RefreshControl } from 'react-native';
import Like from '../components/Liked/Like'
import DishCard from '../components/Discover/DishCard';
import firebase from 'firebase/app';
import mongoose from 'mongoose';
import axios from 'axios';
import { USER_LIKES } from '../queries/users';
import { useQuery } from '@apollo/client';

const LikedDishes = ({ navigation }) => {
	const [refreshing, setRefreshing] = useState(false);
	const [dishLikes, setDishLikes] = useState('');

	const { loading, error, data, refetch } = useQuery(USER_LIKES, {
		variables: {
			_id: mongoose.Types.ObjectId(firebase.auth().currentUser.photoURL)
		},
	})

	useMemo(() => {
		if (data !== undefined && !loading) {
			// console.log(likedData.userById.liked_dishes)
			setDishLikes(new Set(data.userById.likes.map(dish => String(dish._id))))
		}
	}, [data])

	const userIDString = firebase.auth().currentUser.photoURL;

	if (loading) return <Text style={styles.standby}>Loading...</Text>
	if (error) return <Text style={styles.standby}>Houston we have a problem</Text>
	// console.log(data.userById.likes)


	const _onRefresh = () => {
		setRefreshing('true')
		refetch()
		// console.log("yo")
		// setDishLikes(data.userById.likes)
		//reviews = data.dishRatingMany.slice().sort((a, b) =>  b.createdAt - a.createdAt)
		setRefreshing('false')
		// console.log(data)
	}

	return (
		<View syle={styles.container}>
			<Like />
			<View style={styles.item_container}>
				<ScrollView marginBottom={'70%'} showsVerticalScrollIndicator={false} refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={() => refetch()}
					/>}>
					{data.userById.likes.length === 0 ?
						Alert.alert(
							"Currently you dont have any liked dishes",
							"If you like a dish on the Discover page, they will save here!",
							[
								{
									text: "Okay!",
									onPress: () => console.log("Cancel Pressed"),
								}
							]
						) :
						data.userById.likes.map(dish => (
							<TouchableOpacity
								activeOpacit={0.1}
								onPress={() => navigation.navigate('Dish', { dish, navigation })}
								key={dish._id}
							>
								<DishCard
									dish={dish}
									userID={userIDString}
									likedSet={dishLikes}
								/>
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
		backgroundColor: '#FDFCFC'
	},
	standby: {
		marginTop: 300,
		marginLeft: 150,
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

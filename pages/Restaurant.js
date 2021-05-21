import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import MapView, { Marker } from 'react-native-maps';

import { useLazyQuery } from '@apollo/client';
import firebase from 'firebase/app';

import { GET_DISHES_RESTAURANT } from '../queries/dishes';
import DishCard from '../components/Discover/DishCard';
import { USER_LIKED_DISHES } from '../queries/users';
import { GET_RESTAURANT_BY_ID } from '../queries/restaurants';

function Restaurant({ route, navigation }) {
	// Get list of dishes that the user has liked
	const [getLikedDishes, { loading: likedLoading, error: likedError, data: likedData }] = useLazyQuery(USER_LIKED_DISHES)
	const [likedSet, setLikedSet] = useState(new Set())
	const [userIDString, setuserIDString] = useState(firebase.auth().currentUser.photoURL)
	useEffect(() => {
		getLikedDishes({
			variables: {
				_id: mongoose.Types.ObjectId(userIDString)
			}
		})
		if (likedData !== undefined && !likedLoading) {
			setLikedSet(new Set(likedData.userById.liked_dishes.map(dish => String(dish))))
		}
	}, [likedData])

	const { r } = route.params
	const { loading, error, data } = useQuery(GET_RESTAURANT_BY_ID, {
		variables: {
			_id: r._id
		},
	})

	const { loading: restLoading, error: restError, data: restData } = useQuery(GET_DISHES_RESTAURANT, {
		variables: {
			filter: { restaurant_id: r._id },
			sort: '_ID_DESC'
		}
	})

	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	// if (restData) console.log("Dish on Rest Page", restData.dishMany[8])
	return (
		<SafeAreaView style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				provider={'google'}
				showsUserLocation={true}
				initialRegion={{
					latitude: data.restaurantById.latitude,
					longitude: data.restaurantById.longitude,
					latitudeDelta: .0009,
					longitudeDelta: .0009
				}}
			>
				<Marker
					key={r._id}
					coordinate={{
						latitude: data.restaurantById.latitude,
						longitude: data.restaurantById.longitude
					}}
					title={data.restaurantById.name}
					description={data.restaurantById.phone_number}
				>
				</Marker>
			</MapView>
			<View style={styles.restaurant_container}>
				<Text style={styles.text_title}>{data.restaurantById.name}</Text>
				<Text style={styles.dish_discription}>{data.restaurantById.description}</Text>
				<ScrollView>
					{!restLoading && !restError && restData.dishMany.map(dish => (
						// Key error cause dishes with the same keys also load on the discover page... Not sure how to fix
						<TouchableOpacity
							activeOpacity={0.1}
							onPress={() => navigation.navigate('Dish', { dish: dish })}
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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	restaurant_container: {
		backgroundColor: '#FF5349',
		justifyContent: "center",
		alignItems: 'center',
		width: '100%',
		height: '72%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	restaurant_name: {
		color: '#fff',
		fontSize: 28
	},
	restaurant_dist: {
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		color: '#fff',
		fontSize: 18
	},
	menu_btn: {
		marginRight: '5%',
		backgroundColor: '#5349FF',
		justifyContent: "center",
	},
	item_container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: '#FDFCFC',
	},
	text_title: {
		color: '#FFFFFF',
		fontSize: 30,
		marginTop: 30,
		fontWeight: '600'
	},
	dish_discription: {
		color: '#FFFFFF',
		fontSize: 16,
		marginLeft: 30,
		marginRight: 30
	}
});

export default Restaurant;
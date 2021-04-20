import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
	View,
	StyleSheet,
	TextInput,
	Image,
	TouchableWithoutFeedback,
	ScrollView,
	Text,
} from 'react-native';
import { sushi, back_arrow } from '../assets';
import { Col, Row, Grid } from "react-native-easy-grid"
import { Button } from '@ui-kitten/components';

import { GET_DISH_RATINGS } from '../queries/dishes';
import DishReviewRowProfile from '../components/Dish/DishReviewRowProfile';
import AddDishRatingModal from '../components/Dish/AddDishRatingModal';
import firebase from 'firebase/app'
import SignOut from './SignOut';

const Profile = () => {

	
	
	const [dishRatings, setDishRatings] = useState('')
	// Queries all dishRatings
	const { loading, error, data, refetch } = useQuery(GET_DISH_RATINGS, {
		variables: {
			filter: { user_id: firebase.auth().currentUser.photoURL, _operators: { review: { regex: "/.+/ig" } } },
		},
	})

	// Memoizes dishRatings and is updated when the dishRating Query is reran
	useMemo(() => {
		if (data) setDishRatings(data.dishRatingMany)
	}, [data])

	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Ratings had trousble loading, whoopsy...</Text>
	console.log(data)
	return (
		<View style={styles.container}>
			<View style={styles.item_container}>

				<Grid>
					<Row>
						<Col>
							<Text style={styles.dish_name}>{firebase.auth().currentUser.displayName}</Text>

						</Col>
						<Col>
							<SignOut/>
						</Col>
					</Row>
				</Grid>
			</View>
			<View style={styles.review_container}>
				<View >
					<Text style={styles.review_title}>Your Reviews</Text>
				</View>
				<ScrollView>
					
					<Grid style={styles.review_item}>

						<DishReviewRowProfile
							dishRatings={dishRatings}
						/>
					</Grid>
				</ScrollView>
			</View>
		
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	back_arrow: {
		marginTop: '10%',
		marginLeft: '5%',
	},
	shadow_box: {
		shadowColor: '#40404040',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 3,
		shadowRadius: 4,
	},
	food_pic: {
		marginTop: '15%',
		marginLeft: '10%',
		borderRadius: 30,
		height: '100%',
		width: '80%',
		zIndex: 2,
	},
	review_container: {
		backgroundColor: '#FF5349',
		paddingTop: '5%',
		justifyContent: "center",
		width: '100%',
		height: '80%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	dish_name: {
		fontSize: 28,
		marginLeft: '20%'
	},
	item_container: {
		flex: 1,
		paddingTop: '20%'
		
	},
	review_item: {
		marginTop: '5%',
		marginLeft: '5%',
	
	},
	dish_container: {
		marginTop: '15%',
		width: '90%',
		flexWrap: 'wrap'
	},
	dish_discription_container: {
		width: '100%',
		flexWrap: 'wrap',
		zIndex: 2,
	},
	review_title: { 
		fontSize: 24,
		 color: '#fff', 
		 marginLeft: '30%'
	},
	review_text: { color: '#fff' },
	add_review_btn: {
		marginRight: '5%'
	}
});
export default Profile;
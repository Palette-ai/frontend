import React, { useState, useMemo, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DISH_ADD_RATING, GET_DISH_RATINGS } from '../queries/dishes';
import { View, 
	StyleSheet, 
	Text, 
	TextInput, 
	Image,
	TouchableWithoutFeedback,
	ScrollView,
	Button, 
	Keyboard
 } from 'react-native';
import {sushi, back_arrow} from '../assets';
import { Col, Row, Grid } from "react-native-easy-grid";
import zIndex from '@material-ui/core/styles/zIndex';

function Dish({ route }) {
	const { navigation } = route.params
	const { dish } = route.params
	const userID = firebase.auth().currentUser.uid

	const [rating, setRating] = useState('')
	const [review, setReview] = useState('')
	const [dishRatings, setDishRatings] = useState(0)

	// Adding a dishRating, then refetching all dishRatings to update the cache
	const [addReview] = useMutation(DISH_ADD_RATING, {
		onCompleted: (data) => {
			console.log("Review successfully submitted", data);
			Keyboard.dismiss()
			refetch()
		},
		refetchQueries: [{ query: GET_DISH_RATINGS }]
	})

	// Queries all dishRatings
	const { loading, error, data, refetch } = useQuery(GET_DISH_RATINGS, {
		variables: {
			filter: { dish_id: dish._id, hasReviewText: true },
			sort: '_ID_DESC'
		},
		onCompleted: (data) => {
			console.log("Query Has Been Rerun:", data)
		}
	})

	// Memoizes dishRatings and is updated when the dishRating Query is reran
	useMemo(() => {
		if (data) setDishRatings(data.dishRatingMany)
	}, [data])

	//Handler for adding dishRating
	const addDishRatingHandler = () => {
		addReview({
			variables: {
				record: {
					dish_id: dish._id,
					user_id: userID,
					rating: Number(rating),
					review,
				}
			}
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.item_container}>
				<View style={styles.back_arrow}>
					<TouchableWithoutFeedback 
				onPress={() => navigation.navigate('Discover')}>
					<Image source={back_arrow} />
				</TouchableWithoutFeedback>
				</View>
			<Grid>
				<Row>
					<Col>
					<View style={styles.shadow_box}>
						<Image source={sushi} style={styles.food_pic}/>
					</View>
					</Col>
					<Col>
						<Row style={styles.dish_container}>
							<Text style={styles.dish_name}>{dish.dish_name}</Text>
							<Text style={styles.dish_discription_container}>{dish.description}</Text>
						</Row>
					</Col>
				</Row>
			</Grid>
			</View>
			<View style={styles.review_container}>
				<ScrollView>
					<Grid style={styles.review_item}>
						<Row>
						<TextInput
								style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
								onChangeText={text => setReview(text)}
								value={review}
								placeholder='Add Review Text Here'
								style={{}}
							/>
							</Row>
							<Row>
							<TextInput
								style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
								onChangeText={num => setRating(num)}
								value={rating}
								keyboardType='numeric'
								placeholder='Add Rating Number Here'
								style={{ marginTop: 30 }}
							/>
							</Row>
							<Row>
							<Button
								title="Add Review"
								onPress={addDishRatingHandler}
							/>
							</Row>
							<Row>
								<Col>
							{dishRatings !== 0 &&
								dishRatings?.map(({ dish_id, user_id, review, rating }) => (
									<>
									<Row>
										<Text>{`A user said that ${review}`}</Text>
									</Row>
									</>
								))
							}
							</Col>
						</Row>
					</Grid>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFCFC',
	},
	back_arrow:{
		marginTop: '10%',
		marginLeft: '5%',
	},
	shadow_box:{
		shadowColor: '#40404040',
		shadowOffset: { width: 0, height:1 },
		shadowOpacity: 3,
		shadowRadius: 4,  
	},
	food_pic: {
		marginTop: '15%',
		marginLeft: '10%',
		borderRadius:30,
		height:'100%',
		width: '80%',
		zIndex: 2,
		},
	review_container: {
		backgroundColor: '#FF5349',
    width: '100%',
    height: '75%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	dish_name:{fontSize: 28},
	item_container: {
		flex: 1,
	},
	review_item: {
		marginTop: '20%',
		marginLeft: '5%'
	},
	dish_container:{
		marginTop: '5%',
		width: '75%',
		flexWrap: 'wrap'
	},
	dish_discription_container:{
		marginTop: '15%',
		width: '75%',
		flexWrap: 'wrap',
		zIndex: 2,
	},

});
export default Dish;
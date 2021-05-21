import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DISH_RATINGS } from '../queries/dishes';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';
import { sushi, back_arrow } from '../assets';
import firebase from 'firebase/app'
import { Col, Row, Grid } from "react-native-easy-grid"
import { Button } from '@ui-kitten/components';

import OptionsModal from '../components/Dish/OptionsModal';
import DishReviewRow from '../components/Dish/DishReviewRow';
import AddDishRatingModal from '../components/Dish/AddDishRatingModal';

function Dish({ route, navigation }) {
	const { dish } = route.params
	// console.log("dish on Dish Page", dish)

	const [dishRatings, setDishRatings] = useState('')
	const [isModalVisible, setModalVisible] = useState('');
	const [isOptionsModalVisible, setOptionsModalVisible] = useState('');
	const [madeReview, setMadeReview] = useState('');

	const userIDString = firebase.auth().currentUser.photoURL;

	// Queries all dishRatings
	const { loading, error, data, refetch } = useQuery(GET_DISH_RATINGS, {
		variables: {
			filter: { dish_id: dish._id, _operators: { review: { regex: "/.+/ig" } } },
			sort: '_ID_DESC'
		},
	})

	// Memoizes dishRatings and is updated when the dishRating Query is reran
	useMemo(() => {
		if (data) {
			setDishRatings(data.dishRatingMany)
			let reviewIds = data.dishRatingMany.map(a => a.user._id)
			reviewIds.includes(userIDString) ? setMadeReview(true) : setMadeReview(false)
		}
	}, [data])

	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Ratings had trouble loading, whoopsy...</Text>
	return (
		<View style={styles.container}>
			<View style={styles.item_container}>
				<View style={styles.back_arrow}>
					<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
						<View>
							<Image source={back_arrow} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<Grid>
					<Row style={styles.dish_name_container}>
						<Text style={styles.dish_name}>{dish.dish_name}</Text>
					</Row>
					<Row style={styles.dish_other_stuff}>
						<Col>
							<View style={styles.shadow_box}>
								<Image source={sushi} style={styles.food_pic} />
							</View>
						</Col>
						<Col>
							<Row style={styles.dish_container}>
								<Text style={styles.dish_description_container}>{dish.description}</Text>
								<Button
									onPress={() => navigation.navigate('Restaurant', { r: dish.restaurant })}
									style={styles.add_review_btn}
								>
									{dish.restaurant.name}
								</Button>
								<Button style={styles.add_review_btn} onPress={() => setOptionsModalVisible(true)}>
									Order
      							</Button>
							</Row>
						</Col>
					</Row>
				</Grid>
			</View>
			<View style={styles.review_container}>
				<ScrollView >
					<Grid style={styles.review_item}>
						<Row>
							<Col>
								<Text style={styles.review_title}>Reviews</Text>
							</Col>
							<Col>
								<Button
									style={styles.add_review_btn}
									onPress={() => setModalVisible(true)}
									disabled={madeReview}>
									Add Review
      							</Button>
							</Col>
						</Row>
						<DishReviewRow
							dishRatings={dishRatings}
						/>
					</Grid>
				</ScrollView>
			</View>
			<AddDishRatingModal
				isModalVisible={isModalVisible}
				setModalVisible={setModalVisible}
				dish_id={dish._id}
				refetchAllRatings={refetch}
			/>
			<OptionsModal
				isModalVisible={isOptionsModalVisible}
				setModalVisible={setOptionsModalVisible}
				dish={dish}
			/>
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
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	food_pic: {
		borderRadius: 30,
		height: '100%',
		width: '100%',
		zIndex: 2,
	},
	review_container: {
		backgroundColor: '#FF5349',
		paddingTop: '0%',
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
		marginTop: '5%',
	},
	dish_name: {
		fontSize: 28,
		marginLeft: '5%'
	},
	dish_name_container: {
		margin: 0,
		padding: 0,
		// borderWidth: 1,
		flexWrap: 'wrap',
		alignItems: 'center'

	},
	dish_other_stuff: {
		height: '70%'
	},
	item_container: {
		flex: 1,
		height: '30%',
		// marginBottom: '50%',
	},
	review_item: {
		marginTop: '5%',
		marginLeft: '5%'
	},
	dish_container: {
		// marginTop: '15%',
		width: '90%',
		flexWrap: 'wrap'
	},
	dish_description_container: {
		width: '100%',
		flexWrap: 'wrap',
		zIndex: 2,
		marginBottom: '5%'
	},
	review_title: {
		fontSize: 28,
		color: '#fff',
		paddingTop: 0,
		marginTop: 0
	},
	review_text: {
		color: '#fff',
	},
	add_review_btn: {
		marginRight: '10%',
		marginBottom: '5%',
		width: '80%',
	},
	scroll_view: {
		flexGrow: 1
	}
});
export default Dish;
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
import DishReviewRow from '../components/Dish/DishReviewRow';
import AddDishRatingModal from '../components/Dish/AddDishRatingModal';

function Dish({ route }) {
	const { dish, navigation } = route.params

	const [dishRatings, setDishRatings] = useState('')
	const [isModalVisible, setModalVisible] = useState('');

	// Queries all dishRatings
	const { loading, error, data, refetch } = useQuery(GET_DISH_RATINGS, {
		variables: {
			filter: { dish_id: dish._id, _operators: { review: { regex: "/.+/ig" } } },
			sort: '_ID_DESC'
		},
	})
	// console.log(dish._id)

	// Memor izes dishRatings and is updated when the dishRating Query is reran
	useMemo(() => {
		if (data) setDishRatings(data.dishRatingMany)
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
					<Row>
						<Col>
							<Text style={styles.dish_name}>{dish.dish_name}</Text>
							<View style={styles.shadow_box}>
								<Image source={sushi} style={styles.food_pic} />
							</View>
						</Col>
						<Col>
							<Row style={styles.dish_container}>
								<Text style={styles.dish_discription_container}>{dish.description}</Text>
								<Button
									onPress={() => navigation.navigate('Restaurant', 
									{ r: dish.restaurant._id, navigation } )}
								>
									{dish.restaurant.name}
								</Button>
							</Row>
						</Col>
					</Row>
				</Grid>
			</View>
			<View style={styles.review_container}>
				<ScrollView>
					<Grid style={styles.review_item}>
						<Row>
							<Col>
								<Text style={styles.review_title}>Reviews</Text>
							</Col>
							<Col>
								<Button style={styles.add_review_btn} onPress={() => setModalVisible(true)}>
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
		paddingTop: '10%',
		width: '100%',
		height: '70%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	dish_name: {
		fontSize: 28,
		marginLeft: '15%'
	},
	item_container: {
		flex: 1,
	},
	review_item: {
		marginTop: '20%',
		marginLeft: '5%'
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
	review_title: { fontSize: 28, color: '#fff', },
	review_text: { color: '#fff' },
	add_review_btn: {
		marginRight: '5%'
	}
});
export default Dish;
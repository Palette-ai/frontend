import React, { useState } from 'react';
import { StyleSheet, TextInput, Keyboard } from 'react-native';
import { Button, Card, Modal } from '@ui-kitten/components';
import { Row } from "react-native-easy-grid"
import { useMutation } from '@apollo/client';
import StarRating from 'react-native-star-rating';
import firebase from 'firebase/app';

import { DISH_UPDATE_RATING, GET_DISH_RATINGS, DELETE_RATING } from '../../queries/dishes'


function UpdateDishRatingModal({ isModalVisible, setModalVisible, rating, setRating, review, setReview, ratingID, dishID, refetchAllRatings }) {

	// Adding a dishRating, then refetching all dishRatings to update the cache
	const [updateReview] = useMutation(DISH_UPDATE_RATING, {
		onCompleted: (data) => {
			Keyboard.dismiss()
			setModalVisible(false)
			setRating(0)
			setReview('')
			refetchAllRatings()
		},
		refetchQueries: [{ query: GET_DISH_RATINGS }]
	})

	const [deleteRating] = useMutation(DELETE_RATING, {
		onCompleted: (data) => {
			Keyboard.dismiss()
			setModalVisible(false)
			setRating(0)
			setReview('')
			refetchAllRatings()
		},
		refetchQueries: [{ query: GET_DISH_RATINGS }]
	})

	//Handler for adding dishRating
	const updateDishRatingHandler = () => {
		updateReview({
			variables: {
				_id: ratingID,
				record: {
					dish_id: dishID,
					user_id: firebase.auth().currentUser.photoURL,
					rating: Number(rating),
					review,
				}
			}
		})
	}

	const deleteDishRatingHandler = () => {
		deleteRating({
			variables: {
				_id: ratingID,
			}
		})
	}

	return (
		<Modal
			visible={isModalVisible}
			backdropStyle={styles.backdrop}
			onBackdropPress={() => setModalVisible(false)}
		>
			<Card disabled={true}>
				<Row>
					<TextInput
						style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => setReview(text)}
						value={review}
						placeholder='Add Review Text Here'
						style={{ paddingBottom: 20 }}
						maxLength={280}
					/>
				</Row>
				<Row>
					<StarRating
						disabled={false}
						maxStars={5}
						rating={Number(rating)}
						fullStarColor={'yellow'}
						selectedStar={clickedStar => setRating(clickedStar)}
						fullStarColor={'#43474A'}
					/>
				</Row>
				<Row>
				</Row>
				<Button
					style={styles.updateButton}
					title="Update Review"
					onPress={updateDishRatingHandler}>
					Update Review
        </Button>
				<Button
					style={styles.deleteButton}
					title="Delete Review"
					onPress={deleteDishRatingHandler}>
					Delete Review
        </Button>
			</Card>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	updateButton: {
		marginBottom: '2%'
	},
	deleteButton: {
		backgroundColor: 'red'
	},
});

export default UpdateDishRatingModal;
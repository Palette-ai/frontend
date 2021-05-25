import React, { useState } from 'react';
import { StyleSheet, TextInput, Keyboard } from 'react-native';
import { Button, Card, Modal } from '@ui-kitten/components';
import { Row } from "react-native-easy-grid"
import { useMutation } from '@apollo/client';
import StarRating from 'react-native-star-rating';
import firebase from 'firebase/app';

import { DISH_ADD_RATING, GET_DISH_RATINGS } from '../../queries/dishes'


function AddDishRatingModal({ isModalVisible, setModalVisible, dish_id, refetchAllRatings }) {
	const [rating, setRating] = useState(0)
	const [review, setReview] = useState('')

	// Adding a dishRating, then refetching all dishRatings to update the cache
	const [addReview] = useMutation(DISH_ADD_RATING, {
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
	const addDishRatingHandler = () => {
		addReview({
			variables: {
				record: {
					dish_id,
					user_id: firebase.auth().currentUser.photoURL,
					rating: Number(rating),
					review,
				}
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
						rating={rating}
						fullStarColor={'yellow'}
						selectedStar={clickedStar => setRating(clickedStar)}
						fullStarColor={'#43474A'}
					/>
				</Row>
				<Button title="Add Review" onPress={addDishRatingHandler}>
					Add Review
          		</Button>
			</Card>
		</Modal>
	);
}

const styles = StyleSheet.create({
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 500
	},
});

export default AddDishRatingModal;
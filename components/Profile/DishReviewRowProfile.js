import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';
import { Col, Row } from "react-native-easy-grid"
import StarRating from 'react-native-star-rating';
import TimeAgo from 'react-native-timeago';

function DishReviewRowProfile({ dishRatings, setRatingID, setRating, setReview, setDishID, setModalVisible }) {
	return (
		<Row>
			<Col>
				{dishRatings?.map((dr) => (
					<TouchableOpacity
						activeOpacit={0.1}
						onPress={() => { setRatingID(dr._id); setRating(dr.rating); setDishID(dr.dish_id); setReview(dr.review); setModalVisible(true); }}
						key={dr._id}
					>
						<Row key={dr._id} style={styles.rect2}>
							<View style={styles.reviewHolder}>
								<View style={styles.reviewTop}>
									<View flexDirection='column'>
										<Text style={styles.username_text}>{dr.dish.dish_name} from {dr.dish.restaurant.name}</Text>
										<StarRating
											disabled={true}
											maxStars={5}
											rating={dr.rating}
											fullStarColor={'yellow'}
											starSize={22}
											fullStarColor={'#ffffff'}
											emptyStarColor={'#ffffff'}
										/>
									</View>
								</View>
								<View>
									<Text style={styles.review_text}>{`${dr.review}`}</Text>
								</View>
								<View>
									<TimeAgo time={dr.createdAt} interval={2000} />
								</View>
							</View>
						</Row>
					</TouchableOpacity>
				))
				}
			</Col>
		</Row>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFCFC',
	},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
	item_container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: '#FDFCFC',
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
	review_text: { color: '#fff', fontSize: 16 },
	username_text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15
	},
	add_review_btn: {
		marginRight: '5%'
	},
	reviewHolder: {
		// backgroundColor: 'blue',
		flex: 1,
		marginLeft: 8,
		marginBottom: 5,
		marginTop: 5
	},
	rect2: {
		width: '106%',
		alignSelf: 'flex-end',
		flex: 1,
		marginTop: 5,
		borderBottomWidth: 1,
		borderColor: '#FFFFFF',
	},
	reviewTop: {
		flexDirection: 'row',
		marginBottom: 5
	},
	iconContainer: {
		backgroundColor: 'white',
		borderColor: 'black',
		borderRadius: 50,
		marginRight: 3
	},
	icon: {
		width: 40,
		height: 40,
	}
});
export default DishReviewRowProfile;
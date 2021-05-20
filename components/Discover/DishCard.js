import React, { useEffect, useState } from 'react'
import {
	StyleSheet,
	Image,
	Text,
	View,
} from 'react-native'
import { useMutation, useQuery } from '@apollo/client';
import StarRating from 'react-native-star-rating';
import firebase from 'firebase/app';
import { Col, Row, Grid } from "react-native-easy-grid"
import { sushi, dollar_sign, hot, organic, map_sign } from '../../assets'
import { Button, Icon } from '@ui-kitten/components'
import { USER_LIKE_DISH, USER_UNLIKE_DISH } from '../../queries/users';
import mongoose from 'mongoose';


const DishCard = ({ dish, userID, likedSet }) => {
	const [liked, setLiked] = useState(false)
	useEffect(() => {
		setLiked(likedSet !== undefined && likedSet.size !== 0 && likedSet.has(dish._id) ? true : false)
	}, [likedSet])

	//console.log(dish)

	const HeartIcon = (props) => (
		<Icon
			width={30} height={30}
			name='heart'
			stroke={liked ? 'none' : 'red'}
			fill={liked ? 'red' : 'none'}

			{...props}
		/>
	);

	// Like a dish, then update the user's list of liked dishes
	const [dishLike, { like_data }] = useMutation(USER_LIKE_DISH)

	// Unlike a dish, then update the user's list of liked dishes
	const [dishUnlike, { unlike_data }] = useMutation(USER_UNLIKE_DISH)


	const overallHandler = () => {
		console.log('thisworks')
		setLiked(!liked)
		liked ?
			dishUnlike({
				variables: {
					dish_id: dish._id,
					user_id: userID,
				}
			}) : dishLike({
				variables: {
					dish_id: dish._id,
					user_id: userID,
				}
			})
	}

	const numDollars = (price) => {
		const roundPrice = Math.ceil(price)
		if (price < 10) {
			return (
				<Row>
					<Image source={dollar_sign} />
				</Row>
			)
		}
		else if (price < 20) {
			return (
				<Row>
					<Image source={dollar_sign} />
					<Image source={dollar_sign} />
				</Row>
			)
		}
		else if (price < 30) {
			return (
				<Row>
					<Image source={dollar_sign} />
					<Image source={dollar_sign} />
					<Image source={dollar_sign} />
				</Row>
			)
		}
		else {
			return (
				<Row>
					<Image source={dollar_sign} />
					<Image source={dollar_sign} />
					<Image source={dollar_sign} />
					<Image source={dollar_sign} />
				</Row>
			)
		}
	}

	return (
		<View style={styles.rect2}>
			<Grid>
				<Col size={.75}>
					<View style={styles.shadow_box}>
						<Image source={sushi} style={styles.food_pic} />
					</View>
				</Col>
				<Col>
					<Col>
						<Text style={styles.dish_name}>{dish.dish_name}</Text>
						<Button
							accessoryLeft={HeartIcon}
							appearance={liked ? 'filled' : 'outline'}
							size={'giant'}
							onPress={overallHandler}
							style={styles.likeButton}
						/>
						<Text style={styles.res_name}>{dish.restaurant.name}</Text>
						{numDollars(dish.price)}
					</Col>
					<Row size={.25} style={styles.row_reverse}>
						{/* <Col style={styles.staridk}> */}
						<StarRating
							disabled={true}
							maxStars={1}
							rating={1}
							fullStarColor={'blue'}
							starSize={22}
							// fullStarColor={'#ffffff'}
							emptyStarColor={'#ffffff'}
							reversed={true}
							style={styles.staridk}
						/>
						<Text style={styles.rating}>
							{String(dish.average_rating)}
						</Text>
					</Row>
				</Col>
			</Grid>
		</View>
	)
}

const styles = StyleSheet.create({
	rect2: {
		width: 400,
		height: 150,
		backgroundColor: "#F3F3F3",
		marginTop: 17,
		borderRadius: 30,
	},
	food_pic: {
		borderBottomLeftRadius: 30,
		borderTopLeftRadius: 30,
		height: '100%',
		width: '100%'
	},
	likeButton: {
		backgroundColor: "#B0B0B000",
		borderWidth: 0,
		color: 'red'
	},
	shadow_box: {
		shadowColor: '#40404040',
		shadowOffset: { width: -1, height: 2 },
		shadowOpacity: 4,
		shadowRadius: 1,
	},
	dish_name: {
		fontSize: 24,
		flexWrap: 'wrap',
		flex: 3
	},
	rest_name: {
		fontSize: 32,
	},
	rating: {
		fontSize: 24,
	},
	row_reverse: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		marginLeft: 10,
		paddingLeft: 10,
		justifyContent: 'flex-start',
		// paddingBottom: -5
	},
	staridk: {
		marginRight: '5%'
	}
})
export default DishCard

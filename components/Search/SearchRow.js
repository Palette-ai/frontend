import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';
import { Col, Row } from "react-native-easy-grid"

import { GET_ALL_DISHES } from '../../queries/dishes';
import { GET_ALL_RESTAURANTS } from '../../queries/restaurants'

function SearchRow({ toggle, searchTerm, navigation }) {
	const [dishResults, setDishResults] = useState('')
	const [restaurantResults, setRestaurantResults] = useState('')

	const { loading, error, data, refetch } =
		toggle
			?
			useQuery(GET_ALL_DISHES, {
				variables: {
					filter: { _operators: { dish_name: { regex: (searchTerm == '' ? "help" : "/".concat(searchTerm, "/ig")) } } }
				}
			})
			:
			useQuery(GET_ALL_RESTAURANTS, {
				variables: {
					filter: { _operators: { name: { regex: (searchTerm == '' ? "help" : "/".concat(searchTerm, "/ig")) } } }
				}
			})

	useMemo(() => {
		if (data) {
			if (data.dishMany) {
				setDishResults(data.dishMany)
				setRestaurantResults([])
			}
			else if (data.restaurantMany) {
				setRestaurantResults(data.restaurantMany)
				setDishResults([])
			}
		}
	}, [data])

	if (searchTerm === '') return <Text>Enter a search term</Text>
	if (restaurantResults == [] && dishResults == []) return <Text>No results :(</Text>
	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Search had trouble loading, whoopsy...</Text>
	return (
		!toggle
			?
			<Row>
				<Col>
					{restaurantResults?.map((r) => (
						<TouchableOpacity
							activeOpacit={0.1}
							onPress={() => navigation.navigate('Restaurant', { r })}
							key={r._id}
						>
							<Row key={r._id} style={styles.rect2}>
								<View style={styles.reviewHolder}>
									<View style={styles.reviewTop}>
										<View style={styles.iconContainer}>
										</View>
										<View flexDirection='column'>
											<Text style={styles.dish_name_text}>{r.name}</Text>
										</View>
									</View>
									<View>
										<Text style={styles.restaurant_text}>{`${r.description}`}</Text>
									</View>
								</View>
							</Row>
						</TouchableOpacity>
					))
					}
				</Col>
			</Row>
			:
			<Row>
				<Col>
					{dishResults?.map((dish) => (
						<TouchableOpacity
							activeOpacit={0.1}
							onPress={() => navigation.navigate('Dish', { dish })}
							key={dish._id}
						>
							<Row key={dish._id} style={styles.rect2}>
								<View style={styles.reviewHolder}>
									<View style={styles.reviewTop}>
										<View style={styles.iconContainer}>
										</View>
										<View flexDirection='column'>
											<Text style={styles.dish_name_text}>{dish.dish_name}</Text>
										</View>
									</View>
									<View>
										<Text style={styles.restaurant_text}>{`${dish.restaurant.name}`}</Text>
									</View>
								</View>
							</Row>
						</TouchableOpacity>
					))
					}
				</Col>
			</Row>
	)
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
	restaurant_text: { color: '#fff', fontSize: 14 },
	dish_name_text: {
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
		margin: 5
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
export default SearchRow;
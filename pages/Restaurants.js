import React from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { GET_ALL_DISHES, GET_DISHES_RESTAURANT} from '../queries/dishes';
import { GET_RESTAURANT_BY_ID} from '../queries/restaurants';

import RestaurantCard from '../components/Discover/RestaurantCard'
import DishCard from '../components/Discover/DishCard';

const Restaurant = ({ navigation }) => {

    // need to query to get dishes for the specific restaurant
    // add a prop thing 
    const restaurant =  {
        "__typename": "Restaurant",
        "_id": "606f420b39906c7dda2be59f",
        "description": "Gastropub fare & drinks in a convivial, dark-wood tavern backdrop decorated with books.",
        "latitude": 43.7020625,
        "longitude": -72.28956249999999,
        "name": "Murphy's On The Green",
        "phone_number": "+16036434075",
      }

    //want to get restaurant name too 

    // Queries all dishes with the restaurant_id
	const { loading, error, data} = useQuery(GET_DISHES_RESTAURANT, {
		variables: {
			filter: { restaurant_id: restaurant._id},
			sort: '_ID_DESC'
		},
		onCompleted: (data) => {
            console.log("Dishes have been queried:")
           
		}
    })
    if(loading) return <Text> Loading... </Text>
    if(error) return <Text>{error}</Text>

    const dishes = data.dishMany.slice().sort((a, b) =>  b.average_rating - a.average_rating)


    //need to sort array of dishes that we get back 

	// const { rest_loading, rest_error, data: rest_data} = useQuery(GET_RESTAURANT_BY_ID, {
	// 	variables: {
	// 		_id: restaurant_id
	// 	},
	// 	onCompleted: (rest_data) => {
            
	// 		console.log("Restaurant has been queried:" , rest_data)
	// 	}
    // })

	return (
		<View syle={styles.container}>
			{/* TODO: Replace search UI with search and filter functionality */}
           
			<RestaurantCard restaurant_name={restaurant.name} restaurant_description={restaurant.description}/>
			<View style={styles.item_container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{dishes.map(dish => (
						<TouchableOpacity
							activeOpacit={0.1}
							onPress={() => navigation.navigate('Dish', { dish, navigation })}
							key={dish._id}
						>
							<DishCard dish={dish} />
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FDFCFC',
	},
	item_container: {
		justifyContent: 'center',
    	alignItems: 'center',
		height:'100%',
		backgroundColor: '#FDFCFC',
	},
	score_circle: {
		borderRadius: 100,
		width: 40,
		height: 40,
		backgroundColor: '#F7B300',
	},
	footer_container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FDFCFC',
	}
});

export default Restaurant
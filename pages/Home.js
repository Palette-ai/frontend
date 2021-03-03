import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native'
import { GET_ALL_DISHES } from '../queries/dishes'
import { useQuery } from '@apollo/client';
import { TouchableHighlight } from 'react-native-gesture-handler'
import Dish from './Dish';

function Home({ navigation }) {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (error) console.log(error);
	if (loading) return <Text>loading...</Text>

	if (data) return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{data.dishMany.map(dish => (
					<TouchableHighlight
						onPress={() => navigation.navigate('Dish', { dish })}
						key={dish._id}
					>
						<View style={styles.tempBox}>
							<Text>{dish.dish_name}</Text>
						</View>
					</TouchableHighlight>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex'
	},
	tempBox: {
		width: 100,
		height: 100,
		margin: 10,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Home;
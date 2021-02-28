import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useQuery, gql } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { GET_ALL_DISHES } from '../queries/dishes';
/*
	{
		dishes.map(({ _id, name, tags }) => (
			<View key={_id}>
				<Text>{`id: ${_id}`}</Text>
				<Text>{`name: ${name}`}</Text>
				<Text>{`tags: ${tags}`}</Text>
			</View>
		))
	}
 */
const Discover = () => {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { dishMany: dishes } = data

	return (
			<View syle={styles.container}>
				<View style={styles.filter_container}>
					<Text style={styles.textTitle}>recommendations</Text>
				</View>
				<View style={styles.item_container}>
					<Text>Sushi</Text>
				</View>
				<StatusBar style="light" />
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
	filter_container: {
		backgroundColor: '#FF5349',
    width: 430,
    height: 208,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,

	},
	textTitle: {
		fontFamily: "roboto-regular",
		color:'#FFFFFF',
		fontSize: 34,
		marginTop: 60,
    marginLeft: 25,
		fontWeight:'600'
	},
	item_container: {
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	}
});

export default Discover

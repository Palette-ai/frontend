import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useQuery } from '@apollo/client';

import { GET_RESTAURANT_BY_ID } from '../queries/restaurants';

function Restaurant({ route }) {
	const { r, navigation } = route.params
	console.log(r._id)

	const { loading, error, data, refetch } = useQuery(GET_RESTAURANT_BY_ID, {
		variables: {
			_id: "606f420b39906c7dda2be59f"
		},
	})
	console.log(data);

	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Not good why did it break...</Text>
	return (
		<SafeAreaView style={styles.container}>
			<Text>Individual Restaurant: {r.name}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {}
});

export default Restaurant;
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useQuery, gql } from '@apollo/client';

import { GET_ALL_DISHES } from '../queries/dishes';

const Discover = () => {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { dishMany: dishes } = data

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{
					dishes.map(({ _id, name, tags }) => (
						<View key={_id}>
							<Text>{`id: ${_id}`}</Text>
							<Text>{`name: ${name}`}</Text>
							<Text>{`tags: ${tags}`}</Text>
						</View>
					))
				}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default Discover

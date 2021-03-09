import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native'
import { GET_ALL_DISHES } from '../queries/dishes'
import { useQuery } from '@apollo/client';
function Home() {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (error) console.log(error);
	if (loading) return <Text>loading...</Text>

	if (data) return (
		<SafeAreaView>
		</SafeAreaView>
	);
}

export default Home;
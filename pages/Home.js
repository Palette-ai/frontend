import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {
	useQuery,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "react-query"
import { request, gql } from "graphql-request"

const endpoint = 'http://localhost:5000/'
const GET_USER = gql`
	query {
  		getUser {
			  firstName
			  lastName
		  }
	}
`

const getUser = () => {
	return useQuery("user", async () => {
		const data = await request(endpoint, GET_USER)
		return data;
	});
}

const Home = () => {
	const queryClient = useQueryClient()

	const { status, data, error, isFetching } = getUser()
	if (!isFetching) console.log(data)

	if (isFetching) return <Text>Loading...</Text>
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello {`${data.getUser.firstName} ${data.getUser.lastName}`} </Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Home

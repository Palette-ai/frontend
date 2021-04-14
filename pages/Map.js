import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GET_ALL_RESTAURANTS } from '../queries/restaurants';
import { useQuery } from '@apollo/client';
import axios from 'axios';

// const MAPS_API = "https://plus.codes/api?address="

const Map = () => {

	const { loading, error, data } = useQuery(GET_ALL_RESTAURANTS)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { restaurantMany: restaurants } = data
	console.log(data.restaurantMany)

	// const getLatLong = async (pc) => {
	// 	 await axios({
	// 		method: 'get',
	// 		url: MAPS_API + pc,
	// 	}).then ((response) => {
	// 		// console.log(response.data.plus_code.geometry.location)
	// 		console.log({
	// 			latitude: response.data.plus_code.geometry.location.lat,
	// 			longitude: response.data.plus_code.geometry.location.lng
	// 		})
	// 		// if (flip) return response.data.plus_code.geometry.location.lat
	// 		// else return response.data.plus_code.geometry.location.lng
	// 		return ({
	// 			latitude: response.data.plus_code.geometry.location.lat,
	// 			longitude: response.data.plus_code.geometry.location.lng
	// 		})
	// 	})
	// }

	return (
		<SafeAreaView style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				provider={'google'}
				showsUserLocation={true}
				initialRegion={{
					latitude: 43.705130,
					longitude: -72.289520,
					latitudeDelta: .0095,
					longitudeDelta: .0095
				}}
			>
				{data.restaurantMany.map(r => {
					return (<Marker
						key={r._id}
						coordinate={{
							latitude: r.latitude,
							longitude: r.longitude
						}}
						title={r.name}
						description={r.phone_number}
					>
						<View style={{ backgroundColor: "red", padding: 10 }}>
							<Text>{r.name}</Text>
						</View>
					</Marker>
					)
				})}
			</MapView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Map

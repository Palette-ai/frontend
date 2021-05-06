import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Callout, CalloutSubview, Marker } from 'react-native-maps';
import { GET_ALL_RESTAURANTS } from '../queries/restaurants';
import { useQuery } from '@apollo/client';
import { Col, Row, Grid } from "react-native-easy-grid"
import { ScrollView } from 'react-native-gesture-handler';

// const MAPS_API = "https://plus.codes/api?address="

const Map = ({ navigation }) => {

	const { loading, error, data } = useQuery(GET_ALL_RESTAURANTS)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { restaurantMany: restaurants } = data

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
					return (

						<Marker
							key={r._id}
							coordinate={{
								latitude: r.latitude,
								longitude: r.longitude
							}}
							title={r.name}
							description={r.phone_number}
						>
							<Callout
								onPress={() => navigation.navigate('Restaurants', { r, navigation })}
							>
								<View>
									<Text>{r.name}</Text>
									<Text>{r.phone_number}</Text>
								</View>
							</Callout>
							{/* <View style={{ backgroundColor: "red", padding: 10 }}>
								<Text>{r.name}</Text>
							</View> */}
							{/* <View /> */}
						</Marker>
					)
				})}
			</MapView>
			<ScrollView style={styles.overlay} horizontal={true} showsHorizontalScrollIndicator={false}>
			<Row>
			{data.restaurantMany.map(r => {
					return (
						<Col>
						<View
						style={styles.card}>
						<Button
						title={r.name}
							onPress={() => navigation.navigate('Restaurant', { r, navigation })}
						>
								{r.name}
						</Button>		
						</View>	
						</Col>
					)
				})}
				</Row>
				</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	overlay: {
    position: 'absolute',
    bottom: 50,
  },
	card: {
		backgroundColor: 'rgba(255, 255, 255, 1)',
		margin: 10,
		padding: 15,
	}
});

export default Map

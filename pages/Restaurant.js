import React from 'react';
import { View, StyleSheet, Text, SafeAreaView,ScrollView, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import MapView, { Marker } from 'react-native-maps';
import { GET_RESTAURANT_BY_ID } from '../queries/restaurants';
import { Col, Row, Grid } from "react-native-easy-grid"

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
		<MapView
		style={{ flex: 1 }}
		provider={'google'}
		showsUserLocation={true}
		initialRegion={{
			latitude: r.latitude,
			longitude: r.longitude,
			latitudeDelta: .0009,
			longitudeDelta: .0009
		}}
	>
				<Marker
					key={r._id}
					coordinate={{
						latitude: r.latitude,
						longitude: r.longitude
					}}
					title={r.name}
					description={r.phone_number}
				>
				</Marker>
	</MapView>
	<View style={styles.restaurant_container}>
		<ScrollView>
					<Grid>
						<Row>
							<Col>
							<Text style={styles.restaurant_name}>{r.name}</Text>
							</Col>
						</Row>
						<Row>
						<Col>
						<Text style={styles.restaurant_dist}>{r.description}</Text>
						</Col>
						</Row>
						<Row>
							<Button title="see restaurant menu" style={styles.menu_btn}>
      				</Button>
						</Row>
					</Grid>
				</ScrollView>
				
		</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {flex:1},
	restaurant_container: {
		backgroundColor: '#FF5349',
		paddingTop: '5%',
		justifyContent: "center",
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	restaurant_name:{
		marginLeft: 15,
		color: '#fff',
		fontSize: 28
	},
	restaurant_dist:{
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		color: '#fff',
		fontSize: 18
	},
	menu_btn: {
		marginRight: '5%',
		backgroundColor: '#5349FF',
		justifyContent: "center",
	},
});

export default Restaurant;
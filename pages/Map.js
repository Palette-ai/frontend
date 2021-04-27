import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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
      <TouchableOpacity style={styles.overlay}>
        <Text style={styles.text}>Touchable Opacity</Text>
      </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

export default Map

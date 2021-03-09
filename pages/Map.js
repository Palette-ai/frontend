import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Map = () => {
	return (
		<SafeAreaView style={styles.container}>
			<MapView
         style={{ flex: 1 }}
  	     provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 43.705130,
         longitude: -72.289520,
         latitudeDelta: .0095,
         longitudeDelta: .0095}}
      />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Map

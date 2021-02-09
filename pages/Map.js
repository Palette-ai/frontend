import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Map = () => {
	return (
		<SafeAreaView style={styles.container}>
			<MapView
			style={StyleSheet.absoluteFillObject}
			provider={PROVIDER_GOOGLE}
			></MapView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Map

import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Error } from '../assets'

function BGError() {
	return <ImageBackground source={Error} style={styles.container} ></ImageBackground >
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	}
});

export default BGError;
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const LikedDishes = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>DIS BE DA Social</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default LikedDishes

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Profile = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>DIS BE DA PROFILE</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Profile
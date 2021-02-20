import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LoginButton({ onSubmit, username, password, placeholder, email }) {
	return (
		<View style={styles.loginButton}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => email ? onSubmit(username, password, email) : onSubmit(username, password)}
			>
				<View style={styles.loginFiller}></View>
				<Text style={styles.login}>{placeholder}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	loginButton: {
		width: 249,
		height: 46,
		marginTop: 15,
		marginLeft: 26
	},
	button: {
		width: 249,
		height: 46,
		backgroundColor: "rgba(65,117,5,1)",
		borderRadius: 8,
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			height: 3,
			width: -3
		},
		elevation: 12,
		shadowOpacity: 0.25,
		shadowRadius: 4
	},
	loginFiller: {
		flex: 1
	},
	login: {
		color: "rgba(255,255,255,1)",
		height: 46,
		width: 249,
		textAlign: "center",
		lineHeight: 44,
		fontSize: 18
	},
});

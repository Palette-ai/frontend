import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignUpLink({ linkText, isSignUp, setIsSignUp }) {
	return (
		<TouchableOpacity
			onPress={() => setIsSignUp(!isSignUp)}
			style={styles.container}
		>
			<Text style={styles.text}>{linkText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {

	},
	text: {
		textAlign: 'center',
		marginTop: 18,
		color: 'blue'
	}
});

import React from 'react';
import { Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/app'

function ForgotPass() {

	const createTwoButtonAlert = () => {
		Alert.alert(
			"Password Reset",
			"Would you like to reset your password?",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
				},
				{ text: "OK", onPress: () => forgotPassHandler() }
			]
		);
	}
	const forgotPassHandler = () => {
		const email = firebase.auth().currentUser.email
		firebase.auth().sendPasswordResetEmail(email).then(function () {
			console.log('reset email sent');
		}).catch(function (error) {
			// An error happened.
			console.log(error);
		});
	}
	return (
		<Button
			onPress={createTwoButtonAlert}
			title={"Change Password"}
		>
		</Button>
	)
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 18,
		color: 'blue'
	}
});

export default ForgotPass;
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import firebase from 'firebase/app'
import DialogInput from 'react-native-dialog-input';

function ForgotPassLogin() {
	const [modalVisible, setModalVisible] = useState(false)

	const forgotPassHandler = (email) => {
		firebase.auth().sendPasswordResetEmail(email).then(function () {
			console.log('reset email sent');
		}).catch(function (error) {
			console.log(error);
		});
		setModalVisible(false)
	}
	return (
		<>
			<TouchableOpacity
				onPress={() => setModalVisible(true)}
				style={styles.container}
			>
				<Text style={styles.text}>{"Forgot your Password?"}</Text>
			</TouchableOpacity>
			<DialogInput isDialogVisible={modalVisible}
				title={"Password Reset"}
				message={"Submit your email below to reset your password"}
				hintInput={"user@email.com"}
				submitInput={email => forgotPassHandler(email)}
				closeDialog={() => setModalVisible(false)}>
			</DialogInput>
		</>
	)
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 18,
		color: 'blue'
	}
});

export default ForgotPassLogin;
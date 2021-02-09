import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import firebase from 'firebase/app'

const SignInWithGoogle = ({ auth }) => {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider)
	}

	return (
		<>
			<SafeAreaView>
				<TouchableOpacity>
					<Button
						onPress={signInWithGoogle}
						title='Sign in with Google'
					/>
				</TouchableOpacity>
			</SafeAreaView>

		</>
	)
}
export default SignInWithGoogle

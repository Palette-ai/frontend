import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'firebase/app'

const SignInWithGoogle = ({ auth }) => {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider)
	}

	return (
		<>
		<SafeAreaView>
			<TouchableOpacity onClick={signInWithGoogle}>
				<Text>Sign in with Google</Text>
			</TouchableOpacity>
		</SafeAreaView>
			
		</>
	)
}
export default SignInWithGoogle

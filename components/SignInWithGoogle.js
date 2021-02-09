import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, button } from 'react-native'
import firebase from 'firebase/app'

const SignInWithGoogle = ({ auth }) => {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider)
	}

	return (
		<>
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		</>
	)
}
export default SignInWithGoogle

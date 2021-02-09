import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, button } from 'react-native'
import firebase from 'firebase/app'

const SignOut = ({ auth }) => {
	const signOut = () => {
		auth.signOut()
	}
	return (
		<button onClick={signOut}>Log Out</button>
	)
}
export default SignOut

import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'
import firebase from 'firebase/app'

const SignOut = ({ auth }) => {
	const signOut = () => {
		auth.signOut()
	}
	return (
		<Button onPress={signOut}>Log Out</Button>
	)
}
export default SignOut

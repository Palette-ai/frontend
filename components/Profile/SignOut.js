import React from 'react'
import { Button } from 'react-native'
import firebase from 'firebase/app'

const SignOut = () => {
	const signOut = () => {
		firebase.auth().signOut()
	}
	return (
		<Button
			onPress={signOut}
			title="Sign Out"
		/>
	)
}
export default SignOut

import React from 'react'
import { SafeAreaView, TouchableOpacity, Button } from 'react-native'
import firebase from 'firebase/app'

const SignInWithFacebook = ({ auth }) => {
	const signInWithFacebook = () => {
		const provider = new firebase.auth.FacebookAuthProvider()
		auth.signInWithPopup(provider)
	}

	return (
		<>
			<SafeAreaView>
				<TouchableOpacity>
					<Button
						onPress={signInWithFacebook}
						title='Sign in with Facebook'
					/>
				</TouchableOpacity>
			</SafeAreaView>

		</>
	)
}
export default SignInWithFacebook

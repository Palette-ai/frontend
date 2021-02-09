import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useAuthState } from 'react-firebase-hooks/auth'

import SignInWithGoogle from '../components/SignInWithGoogle'
import SignOut from '../components/SignOut'
import useFirebase from '../hooks/useFirebase'
import SignIn from '../components/SignIn';

const Home = () => {
	const { auth } = useFirebase()
	const [user] = useAuthState(auth)

	return (
		// <SafeAreaView style={styles.container}>
		// 	<Text>Hello {`${data.getUser.firstName} ${data.getUser.lastName}`} </Text>
		// </SafeAreaView>

		user ?
			<SignOut auth={auth} /> :
			<>
				<SignInWithGoogle auth={auth} />
				<SignIn />
			</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Home
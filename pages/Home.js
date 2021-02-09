import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { useAuthState } from 'react-firebase-hooks/auth'

import SignInWithGoogle from '../components/SignInWithGoogle'
import SignOut from '../components/SignOut'
import useFirebase from '../hooks/useFirebase'
import SignIn from '../components/SignIn';

const Home = () => {
	const { auth } = useFirebase()
	const [user] = useAuthState(auth)

	return (
		user ?
			<SignOut auth={auth} /> :
			<>
				<SafeAreaView style={styles.container}>
					<SignInWithGoogle auth={auth} />
					<SignIn />
				</SafeAreaView>

			</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Home

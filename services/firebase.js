
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseInit = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyBLd28dCnpi2-WrzC9UV2EYDmbG2hO-7To",
		authDomain: "palette-ai.firebaseapp.com",
		projectId: "palette-ai",
		storageBucket: "palette-ai.appspot.com",
		messagingSenderId: "279114757792",
		appId: "1:279114757792:web:859289ac427b6e72be7bc5",
		measurementId: "G-49W2XBPM4J"
		// Initialize Firebase
	}
	if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

	return {
		auth: firebase.auth(),
		firestore: firebase.firestore()
	}

}


// Finally, export it to use it throughout your app
export { firebaseInit }

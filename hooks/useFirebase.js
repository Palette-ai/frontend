import firebase from 'firebase/app'

const useFirebase = () => {
	return {
		auth: firebase.auth(),
		firestore: firebase.firestore()
	}
}

export default useFirebase
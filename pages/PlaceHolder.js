import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { placeholder } from '../assets/index'

const PlaceHolder = () => {


	return (
		<SafeAreaView style={styles.container}>
      <Image src={placeholder} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default PlaceHolder

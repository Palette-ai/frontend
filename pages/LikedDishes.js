import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Like from '../components/Liked/Like'
import DishCard from '../components/Discover/DishCard';
import firebase from 'firebase/app';
import mongoose from 'mongoose';

const LikedDishes = () => {
	return (
		<View syle={styles.container}>
			<View>
				<Like/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FDFCFC',
	},
});

export default LikedDishes

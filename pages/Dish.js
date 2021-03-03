import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

function Dish({ route }) {
	const { dish } = route.params
	const [rating, setRating] = useState('')

	return (
		<View style={styles.container}>
			<>
				<Text>{dish._id}</Text>
				<Text>{dish.dish_name}</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={text => onChangeText(text)}
					value={rating}
					placeholder='Rating'
				/>
			</>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {}
});

export default Dish;
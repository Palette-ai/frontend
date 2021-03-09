import React, { useState } from 'react';
import { View, 
	StyleSheet, 
	Text, 
	TextInput, 
	SafeAreaView, 
	Image,
	TouchableWithoutFeedback,
	ScrollView,
 } from 'react-native';
import {sushi, back_arrow} from '../assets';
import { Col, Row, Grid } from "react-native-easy-grid";

function Dish({ route }) {
	const { dish } = route.params
	const { navigation } = route.params
	const [rating, setRating] = useState('')
	return (
		<View style={styles.container}>
			<View style={styles.item_container}>
				<View style={styles.back_arrow}>
					<TouchableWithoutFeedback 
				onPress={() => navigation.navigate('Discover')}>
					<Image source={back_arrow} />
				</TouchableWithoutFeedback>
				</View>
			<Grid>
				<Row>
					<Col>
					<View style={styles.shadow_box}>
						<Image source={sushi} style={styles.food_pic}/>
					</View>
					</Col>
					<Col>
						<Row style={styles.dish_container}>
						<Text style={styles.dish_name}>{dish.dish_name}</Text>
						</Row>
					</Col>
				</Row>
			</Grid>
			</View>
			<View style={styles.review_container}>
				<ScrollView>
					<Grid style={styles.review_item}>
						<Row>
						<TextInput
								style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
								onChangeText={text => onChangeText(text)}
								value={rating}
								placeholder='Rating'
							/>
						</Row>
					</Grid>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFCFC',
	},
	back_arrow:{
		marginTop: '10%',
		marginLeft: '5%',
	},
	shadow_box:{
		shadowColor: '#40404040',
		shadowOffset: { width: 0, height:1 },
		shadowOpacity: 3,
		shadowRadius: 4,  
	},
	food_pic: {
		marginTop: '15%',
		marginLeft: '10%',
		borderRadius:30,
		height:'100%',
		width: '80%',
		zIndex: 2,
		},
	review_container: {
		backgroundColor: '#FF5349',
    width: '100%',
    height: '75%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	dish_name:{fontSize: 24,},
	item_container: {
		flex: 1,
	},
	review_item: {
		marginTop: '20%',
		marginLeft: '5%'
	},
	dish_container:{
		marginTop: '15%',
		width: '75%',
		flexWrap: 'wrap'
	}

});

export default Dish;
import React from 'react'
import { 
	ScrollView, 
	StyleSheet, 
	Text, 
	View 
} from 'react-native'
import { useQuery, gql } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { GET_ALL_DISHES } from '../queries/dishes';
/*
	{
		dishes.map(({ _id, name, tags }) => (
			<View key={_id}>
				<Text>{`id: ${_id}`}</Text>
				<Text>{`name: ${name}`}</Text>
				<Text>{`tags: ${tags}`}</Text>
			</View>
		))
	}
 */
const Discover = () => {
	const { loading, error, data } = useQuery(GET_ALL_DISHES)
	if (loading) return <Text> Loading... </Text>
	if (error) return <Text>{error}</Text>
	const { dishMany: dishes } = data

	return (
			<View syle={styles.container}>
				<View style={styles.filter_container}>
					<Text style={styles.textTitle}>recommendations</Text>
					<ScrollView style={styles.filter_scroll_container} horizontal={true}s>
						<Text style={styles.textFiler}>price</Text>
						<Text style={styles.textFiler}>distance</Text>
						<Text style={styles.textFiler}>rating</Text>
						<Text style={styles.textFiler}>score</Text>
						<Text style={styles.textFiler}>organic</Text>
						<Text style={styles.textFiler}>spicy</Text>
						<Text style={styles.textFiler}>gluten</Text>
						<Text style={styles.textFiler}>dairy</Text>
					</ScrollView>
				</View>
				<View style={styles.item_container}>
					<View style={styles.rect2}></View>
					<View style={styles.rect2}></View>
					<View style={styles.rect2}></View>
				</View>
				<StatusBar style="light" />
				<View style={styles.footer_container}/>
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
	filter_container: {
		backgroundColor: '#FF5349',
    width: 430,
    height: 208,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,

	},
	filter_scroll_container:{
		marginTop: 35,
    marginLeft: 100,
	},

	textFiler: {
		marginRight: 25,
	},
	textTitle: {
		color:'#FFFFFF',
		fontSize: 34,
		marginTop: 60,
    marginLeft: 25,
		fontWeight:'600'
	},
	item_container: {
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	},
	rect2: {
    width: 315,
    height: 130,
    backgroundColor: "#E6E6E6",
    marginTop: 15,

  },
	footer_container:{
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#FDFCFC',
	}
});

export default Discover

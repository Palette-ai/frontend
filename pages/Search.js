import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
	View,
	StyleSheet,
	TextInput,
	Image,
	TouchableWithoutFeedback,
	ScrollView,
	Text,
} from 'react-native';
import { sushi, back_arrow } from '../assets';
import { Col, Row, Grid } from "react-native-easy-grid"
import { Button } from '@ui-kitten/components';

import { GET_ALL_DISHES } from '../queries/dishes';
import { GET_ALL_RESTAURANTS } from '../queries/restaurants'
import SearchRow from '../components/Search/SearchRow';


function Search({ route }) {
	// const { navigation } = route.params

	const [dishResults, setDishResults] = useState('')
	// const [isModalVisible, setModalVisible] = useState('');
  const [searchTerm, setSearchTerm] = useState('')
  // const searchTerm = 'Pad'

  const SearchBar = () => (
    <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setSearchTerm(text)}
      value={searchTerm}
      placeholder='Search for Deeshes'
      style={{ paddingBottom: 20 }}
    />
  );

	const { loading, error, data, refetch } = useQuery(GET_ALL_DISHES, {
		variables: {
			filter: { _operators: { dish_name: { regex: ( searchTerm == '' ? "help" : "/".concat(searchTerm, "/ig")  ) } } }
    },
    onCompleted: ((data) => {console.log("completed", data.dishMany)})
	})
	// console.log(dish._id)

	useMemo(() => {
		if (data) setDishResults(data.dishMany)
	}, [data])

  // console.log(dishResults)

	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Ratings had trouble loading, whoopsy...</Text>
	return (
		<View style={styles.container}>
			<View style={styles.item_container}>
			</View>
			<View style={styles.review_container}>
				<ScrollView>
					<Grid style={styles.review_item}>
						<Row>
							<Col>
								<TextInput
                  style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => setSearchTerm(text)}
                  value={searchTerm}
                  placeholder='Search for Deeshes'
                  style={{ paddingBottom: 20 }}
                />
							</Col>
						</Row>
						<SearchRow
							dishes={dishResults}
              visible={false}
						/>
					</Grid>
				</ScrollView>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	back_arrow: {
		marginTop: '10%',
		marginLeft: '5%',
	},
	shadow_box: {
		shadowColor: '#40404040',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 3,
		shadowRadius: 4,
	},
	food_pic: {
		marginTop: '15%',
		marginLeft: '10%',
		borderRadius: 30,
		height: '100%',
		width: '80%',
		zIndex: 2,
	},
	review_container: {
		backgroundColor: '#FF5349',
		paddingTop: '10%',
		width: '100%',
		height: '70%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	dish_name: {
		fontSize: 28,
		marginLeft: '15%'
	},
	item_container: {
		flex: 1,
	},
	review_item: {
		marginTop: '20%',
		marginLeft: '5%'
	},
	dish_container: {
		marginTop: '15%',
		width: '90%',
		flexWrap: 'wrap'
	},
	dish_discription_container: {
		width: '100%',
		flexWrap: 'wrap',
		zIndex: 2,
	},
	review_title: { fontSize: 28, color: '#fff', },
	review_text: { color: '#fff' },
	add_review_btn: {
		marginRight: '5%'
	}
});
export default Search;
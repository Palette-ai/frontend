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
import { Button, Toggle, Input } from '@ui-kitten/components';

import SearchRow from '../components/Search/SearchRow';
import Title from '../components/Discover/Title';


function Search({ navigation }) {
	const [searchTerm, setSearchTerm] = useState('')
	const [toggle, setToggle] = useState('')

	return (
		<View style={styles.container}>
			<Title text={'Search'} />
			<View style={styles.item_container}>
				<Grid>
					<Row>
						<View style={styles.search_box}>
							<TextInput
								style={styles.search_text}
								onChangeText={text => setSearchTerm(text)}
								value={searchTerm}
								autoFocus={true}
								placeholder='Search here'
							/>
						</View>
					</Row>
					<Row style={styles.toggle_thing}>
						<Grid style={styles.restaurant_box}>
							<Text>Restaurants</Text>
						</Grid>
						<Toggle checked={toggle} onChange={checked => setToggle(checked)} />
						<Grid style={styles.dish_box}>
							<Text>Dishes</Text>
						</Grid>
					</Row>
				</Grid>
			</View>
			<View style={styles.review_container}>
				<ScrollView>
					<Grid style={styles.review_item}>
						<SearchRow
							toggle={toggle}
							searchTerm={searchTerm}
							visible={false}
							navigation={navigation}
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
	shadow_box: {
		shadowColor: '#40404040',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 3,
		shadowRadius: 4,
	},
	review_container: {
		backgroundColor: '#FF5349',
		paddingTop: '0%',
		width: '100%',
		height: '70%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		zIndex: -1,
	},
	title: {
		fontSize: 28,
		marginLeft: '15%',
	},
	search_box: {
		borderWidth: .5,
		borderRadius: 10,
		marginBottom: '5%',
		paddingLeft: 5,
		width: '100%',
	},
	item_container: {
		flex: 1,
		fontSize: 40,
		marginTop: '5%',
		width: '90%',
		marginLeft: '5%',
		marginRight: '5%',
	},
	review_item: {
		marginTop: '20%',
		marginLeft: '5%'
	},
	title_container: {
		marginTop: '15%',
		width: '90%',
		flexWrap: 'wrap'
	},
	search_text: {
		width: '100%',
		flexWrap: 'wrap',
		zIndex: 2,
		fontSize: 36,
	},
	toggle_thing: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	restaurant_box: {
		fontSize: 36,
		marginRight: '5%',
		marginLeft: 'auto',
	},
	dish_box: {
		fontSize: 36,
		marginLeft: '5%',
	},
	review_title: { fontSize: 36, color: '#fff', },
	review_text: { color: '#fff' },
	add_review_btn: {
		marginRight: '5%'
	}
});
export default Search;
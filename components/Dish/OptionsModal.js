import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { Button, Card, Modal } from '@ui-kitten/components';
import { Row } from "react-native-easy-grid"
import AppLink from 'react-native-app-link';
import * as Linking from 'expo-linking';

import { GET_RESTAURANT_BY_ID } from '../../queries/restaurants';


function AddDishRatingModal({ isModalVisible, setModalVisible, dish }) {

	const { loading, error, data, refetch } = useQuery(GET_RESTAURANT_BY_ID, {
		variables: {
			_id: dish.restaurant._id
		},
	})
	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Ratings had trouble loading, whoopsy...</Text>
	return (
		<Modal
			visible={isModalVisible}
			backdropStyle={styles.backdrop}
			onBackdropPress={() => setModalVisible(false)}
		>
			<Card disabled={true}>
				<Row>
					<Button title="Add Review" onPress={() => { AppLink.maybeOpenURL('ubereats://', { appName: 'UberEats', appStoreId: '1058959277', appStoreLocale: 'us', playStoreId: 'com.ubercab.eats' }) }}>
						Open in Uber Eats
          			</Button>
				</Row>
				<Row>
				</Row>
				<Button
					style={styles.contact_button}
					title="Add Review"
					onPress={() => Linking.openURL(`tel:${data.restaurantById.phone_number}`)}

				>
					Call Restaurant
          </Button>
			</Card>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',

	},
	contact_button: {
		marginTop: '10%',
	},
});

export default AddDishRatingModal;
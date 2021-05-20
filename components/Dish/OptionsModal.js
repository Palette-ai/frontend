import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Modal } from '@ui-kitten/components';
import { Row } from "react-native-easy-grid"
import AppLink from 'react-native-app-link';


function AddDishRatingModal({ isModalVisible, setModalVisible }) {
	return (
		<Modal
			visible={isModalVisible}
			backdropStyle={styles.backdrop}
			onBackdropPress={() => setModalVisible(false)}
		>
			<Card disabled={true}>
				<Row>
					<Button title="Add Review" onPress={() => { AppLink.maybeOpenURL('ubereats://', { appName: 'UberEats', appStoreId: '1058959277', appStoreLocale: 'us', playStoreId: 'com.ubercab.eats' }) }}>
						open in ubereats
          </Button>
				</Row>
				<Row>
				</Row>
				<Button title="Add Review">
					Call restaurant
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
});

export default AddDishRatingModal;
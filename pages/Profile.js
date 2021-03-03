import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Svg, { Ellipse } from "react-native-svg";

const Profile = () => {
	return (
			<View style={styles.container}>
				<View style={styles.welcomeBackSyedRow}>
					<Text style={styles.welcomeBackSyed}>Welcome back, Syed.</Text>
					<Svg viewBox="0 0 82.71 86.26" style={styles.ellipse}>
						<Ellipse
							stroke="rgba(230, 230, 230,1)"
							strokeWidth={0}
							fill="rgba(230, 230, 230,1)"
							cx={41}
							cy={43}
							rx={41}
							ry={43}
						></Ellipse>
					</Svg>
				</View>
				<Text style={styles.tasteProfile}>Taste profile</Text>
				<View style={styles.rectRow}>
					<View style={styles.rect}>
						<Text style={styles.groups}>Groups</Text>
					</View>
					<View style={styles.rect1}>
						<Text style={styles.friends}>Friends</Text>
					</View>
					<View style={styles.rect2}>
						<Text style={styles.history}>History</Text>
					</View>
				</View>
			</View>
		);
	}

	const styles = StyleSheet.create({
		container: {
			flex: 1
		},
		welcomeBackSyed: {
			fontFamily: "roboto-regular",
			color: "#121212",
			fontSize: 37
		},
		ellipse: {
			width: 86,
			height: 86,
			marginLeft: 53
		},
		welcomeBackSyedRow: {
			height: 86,
			flexDirection: "row",
			marginTop: 68,
			marginLeft: 17,
			marginRight: 34
		},
		tasteProfile: {
			fontFamily: "roboto-regular",
			color: "#121212",
			fontSize: 24,
			marginTop: 47,
			marginLeft: 23
		},
		rect: {
			width: 94,
			height: 66,
			backgroundColor: "#E6E6E6",
			marginTop: 3
		},
		groups: {
			fontFamily: "roboto-regular",
			color: "#121212",
			marginTop: 30,
			marginLeft: 24
		},
		rect1: {
			width: 94,
			height: 66,
			backgroundColor: "#E6E6E6",
			marginLeft: 23,
			marginTop: 3
		},
		friends: {
			fontFamily: "roboto-regular",
			color: "#121212",
			marginTop: 30,
			marginLeft: 25
		},
		rect2: {
			width: 94,
			height: 66,
			backgroundColor: "#E6E6E6",
			marginLeft: 29
		},
		history: {
			fontFamily: "roboto-regular",
			color: "#121212",
			marginTop: 28,
			marginLeft: 25
		},
		rectRow: {
			height: 69,
			flexDirection: "row",
			marginTop: 376,
			marginLeft: 23,
			marginRight: 18
		}
	});

export default Profile

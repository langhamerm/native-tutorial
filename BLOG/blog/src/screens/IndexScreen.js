import React, { useContext, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
// Import your Context from Blog Context

// Import trash can icon

const IndexScreen = ({ navigation }) => {
	// Decalre a constant for state and 2 functions from our Blog Context: delete and get. Set these equal to useContext with our Context passed into it

	useEffect(() => {
		// Call our function to get blog posts
	}, []);

	return (
		<View>
			{/* Create a flatlist mapping out the blog posts */}

			{/* Create a touchableOpactity that navigates you to the ShowScreen to view the post's details */}

			{/* Create a delete button with the trash can icon to remove posts */}
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		// Set nav options here
	};
};

const styles = StyleSheet.create({});

export default IndexScreen;

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";

// Import your provider from Blog Context

import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
	{
		// create all screen instances here
	},
	{
		// set initial route here and the title for the navbar
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		// Wrap your app in the provider

		<App />
	);
};

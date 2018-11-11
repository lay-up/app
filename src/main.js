import React from 'react'
import { createStackNavigator } from 'react-navigation'
import colors from 'values/colors'

import Home from 'home'

export default createStackNavigator({
	Home: {
		screen: Home
	}
}, {
	navigationOptions: {
		headerTitle: 'Se Poupe',
		headerTintColor: colors.white,
		headerStyle: {
			backgroundColor: colors.green,
			elevation: 0,
			shadowOpacity: 0
		}
	}
})
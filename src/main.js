import React from 'react'
import { createStackNavigator } from 'react-navigation'
import colors from 'values/colors'

import Resume from 'resume/resume'

export default createStackNavigator({
	Home: {
		screen: Resume
	}
}, {
	navigationOptions: {
		headerTitle: 'Se Poupe',
		headerTintColor: colors.white,
		headerTransparent: true
	}
})
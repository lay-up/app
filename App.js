import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import colors from 'values/colors'

import Main from 'main'

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					backgroundColor={ colors.green }
					barStyle={ Platform.OS === 'android' ? 'default' : 'light-content' }
				/>
				<Main/>
			</View>
		)
	}
}
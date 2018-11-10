import React from 'react'
import { View, StatusBar, Platform } from 'react-native'

import Resume from 'resume/resume'

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					backgroundColor="#63e5cc"
					barStyle={ Platform.OS === 'android' ? 'default' : 'light-content' }
				/>
				<Resume/>
			</View>
		)
	}
}
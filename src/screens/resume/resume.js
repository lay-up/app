import React from 'react'
import { View } from 'react-native'

import Header from './components/header'

export default class Home extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					house={ require('images/first-house.png') }
				/>
			</View>
		)
	}
}
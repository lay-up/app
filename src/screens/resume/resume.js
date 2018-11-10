import React from 'react'
import { View } from 'react-native'

import Header from './components/header'
import Info from './components/info'

export default class Home extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					house={ require('images/first-house.png') }
				/>
				<View style={{ flex: 0.618 }}>
					<Info
						name="Allan"
						economies={ 1324.34 }
					/>
				</View>
			</View>
		)
	}
}
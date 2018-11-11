import React from 'react'
import { View } from 'react-native'
import style from './resumeStyle'

import House from './components/house'
import Info from './components/info'

export default class Home extends React.Component {

	render() {
		return (
			<View style={ style.resume }>
				<View style={ style.sky }>
					<Info
						name="Allan"
						economies={ 1324.34 }
					/>
				</View>
				<House
					house={ require('images/first-house.png') }
				/>
			</View>
		)
	}
}
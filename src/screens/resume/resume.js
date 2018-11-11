import React from 'react'
import { View, Dimensions } from 'react-native'
import style from './resumeStyle'

import Carousel from 'react-native-snap-carousel'

import House from './components/house'
import Info from './components/info'

export default class Home extends React.Component {

	render() {
		return (
			<View style={ style.resume }>
				<Carousel
					containerCustomStyle={ style.sky }
					contentContainerCustomStyle={ style.skyContainer }
					data={[
						{
							month: 'setembro',
							value: 2535.12
						},
						{
							month: 'outubro',
							value: 3512.12
						}
					]}
					renderItem={({ item, index }) => (
						<Info { ...item }/>
					)}
					sliderWidth={ Dimensions.get('window').width }
					itemWidth={ Dimensions.get('window').width }
				/>
				<House
					house={ require('images/first-house.png') }
				/>
			</View>
		)
	}
}
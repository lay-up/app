import React from 'react'
import { View, Dimensions, ActivityIndicator } from 'react-native'
import style from './resumeStyle'
import colors from 'values/colors'

import Carousel from 'react-native-snap-carousel'

import House from './components/house'
import Info from './components/info'

import ResumeService from 'services/resumeService'

export default class Home extends React.Component {

	state = {}

	componentDidMount() {
		ResumeService.getTotals().then(totals => {
			this.setState({ totals })
			setTimeout(() => {
				this.carousel.snapToItem(2)
			}, 100)
		})
	}

	getTotals() {
		return this.state.totals
			? (
				<Carousel
					ref={ ref => this.carousel = ref }
					containerCustomStyle={ style.sky }
					contentContainerCustomStyle={ style.skyContainer }
					data={ this.state.totals }
					renderItem={({ item, index }) => (
						<Info { ...item }/>
					)}
					sliderWidth={ Dimensions.get('window').width }
					itemWidth={ Dimensions.get('window').width }
				/>
			)
			: (
				<View style={ style.sky }>
					<View style={ style.skyContainer }>
						<ActivityIndicator
							size="large"
							color={ colors.white }
						/>
					</View>
				</View>
			)
	}

	render() {
		return (
			<View style={ style.resume }>
				{ this.getTotals() }
				<House
					house={ require('images/first-house.png') }
				/>
			</View>
		)
	}
}
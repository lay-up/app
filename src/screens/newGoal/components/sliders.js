import React from 'react'
import { View, Text, Slider } from 'react-native'
import style from '../newGoalStyle'

import colors from 'values/colors'
import MoneyHelper from 'helpers/moneyHelper'

const Sliders = props => (
	<View>
		<Text style={ style.title }>DESPESAS</Text>
		{
			props.sliders.map((slider, i) => (
				<View key={ i } style={ style.sliderWrapper }>
					<Text style={ style.subtitle }>{ slider.name }</Text>
					<Slider
						maximumValue={ slider.value * 2 }
						thumbTintColor={ colors.green }
						minimumTrackTintColor={ colors.green }
						onValueChange={ changedValue => props.bind(i, changedValue) }
						value={ slider.value }
					/>
					<Text style={ style.sliderValue }>
						R$ { MoneyHelper.formatMoney(slider.changedValue == null ? slider.value : slider.changedValue) }/
						{ MoneyHelper.formatMoney(slider.value * 2) }
					</Text>
				</View>
			))
		}
	</View>
)

export default Sliders
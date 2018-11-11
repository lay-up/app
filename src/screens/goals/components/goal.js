import React from 'react'
import { View, Text } from 'react-native'
import style from '../goalsStyle'

import MoneyHelper from 'helpers/moneyHelper'

const Goal = props => (
	<View style={ style.goal }>
		<Text>{ props.description }</Text>
		<View style={ style.bar }>
			<View style={ style.barPercentage }/>
		</View>
		<Text>
			R$ { MoneyHelper.formatMoney(props.spared) }/
			{ MoneyHelper.formatMoney(props.toSpare) }
		</Text>
	</View>
)

export default Goal
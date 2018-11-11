import React from 'react'
import { View, Text } from 'react-native'
import style from '../goalsStyle'

import MoneyHelper from 'helpers/moneyHelper'

const Goal = props => (
	<View style={ style.goalWrapper }>
		<View style={ style.goal }>
			<Text style={ style.description }>{ props.description }</Text>
			<View style={ style.bar }>
				<View style={{
					...style.barPercentage,
					width: `${ (props.spared * 100) / props.value }%`
				}}/>
			</View>
			<Text style={ style.values }>
				R$ { MoneyHelper.formatMoney(props.spared) }/
				{ MoneyHelper.formatMoney(props.value) }
			</Text>
		</View>
	</View>
)

export default Goal
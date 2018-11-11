import React from 'react'
import { View, Text } from 'react-native'
import style from '../resumeStyle'

import MoneyHelper from 'helpers/moneyHelper'

const Info = props => (
	<View style={ style.info }>
		<View style={ style.infoContainer }>
			<Text style={ style.infoValuePrefix }>
				<Text style={ style.infoText }>
					Você{ !props.month ? ' já' : '' }
				</Text>
				<Text style={{ ...style.infoText, ...style.infoBoldText, }}>
					&nbsp;economizou
				</Text>
			</Text>
			<View style={ style.infoValueWrapper }>
				<Text style={ style.infoText }>
					R$&nbsp;
				</Text>
				<Text style={{ ...style.infoValue, ...style.infoBoldText }}>
					{ MoneyHelper.formatMoney(props.value) }
				</Text>
			</View>
			<Text style={{ ...style.infoText, ...style.infoValueLabel }}>
				{
					props.month 
						? `no mês de ${ props.month }`
						: `no total`
				}
			</Text>
		</View>
		<View style={ style.borderWrapper }>
			<View style={ style.point }/>
			<View style={ !props.month ? style.lastBorder : style.middleBorder }/>
		</View>
	</View>
)

export default Info
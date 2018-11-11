import React from 'react'
import { View, Text } from 'react-native'
import style from '../resumeStyle'

const Info = props => (
	<View style={ style.info }>
		<View style={ style.infoContainer }>
			<Text style={ style.infoValuePrefix }>
				<Text style={ style.infoText }>
					Você já
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
					{ props.value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }
				</Text>
			</View>
			<Text style={{ ...style.infoText, ...style.infoValueLabel }}>
				no mês de { props.month }
			</Text>
		</View>
	</View>
)

export default Info
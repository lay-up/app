import React from 'react'
import { View, Text } from 'react-native'
import style from '../resumeStyle'

const Info = props => (
		<View style={ style.info }>
			<Text style={ style.infoText }>
				<Text style={{ ...style.infoText, ...style.infoBoldText, }}>
					{ props.name }
				</Text>
				<Text style={ style.infoText }>
					, você ja economizou
				</Text>
			</Text>
			<View style={ style.infoValueWrapper }>
				<Text style={{ ...style.infoValue, ...style.infoBoldText }}>
					R$ { props.economies.toFixed(2) }
				</Text>
				<Text style={{ ...style.infoText, ...style.infoValueLabel  }}>
					este mês
				</Text>
			</View>
		</View>
)

export default Info
import React from 'react'
import { View, Text } from 'react-native'
import style from '../resumeStyle'

const Info = props => (
		<View style={ style.info }>
			<Text style={ style.infoText }>
				<Text style={{ ...style.infoText, ...style.infoBoldText, }}>
					{ props.name }
				</Text>
				<Text style={{ ...style.infoText, ...style.infoValueLabel }}>
					, você já economizou
				</Text>
			</Text>
			<Text style={{ ...style.infoValue, ...style.infoBoldText }}>
				{ props.economies.toFixed(2) }
			</Text>
		</View>
)

export default Info
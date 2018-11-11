import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import style from '../resumeStyle'

const House = props => (
	<View style={ style.house }>
		<Image 
			style={ style.background }
			width={ Dimensions.get('window').width }
			source={ require('images/bg.png') }
			resizeMode="cover"
		/>
		<Image
			style={ style.house }
			source={ props.house }
			resizeMode="contain"
		/>
	</View>
)

export default House
import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import style from '../resumeStyle'

const Header = props => (
	<View style={ style.header }>
		<Image 
			style={ style.background }
			width={ Dimensions.get('window').width }
			source={ require('images/bg.png') }
			resizeMode="cover"
		/>
		<Image
			style={ style.house }
			width={ Dimensions.get('window').width }
			source={ props.house }
			resizeMode="contain"
		/>
	</View>
)

export default Header
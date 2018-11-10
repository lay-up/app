import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
	header: {
		flex: 0.382,
		position: 'relative'
	},
	background: {
		flex: 1
	},
	house: {
		position: 'absolute',
		bottom: 0,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height * 0.382
	}
})

export default style
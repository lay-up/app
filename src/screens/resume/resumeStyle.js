import { StyleSheet, Dimensions, PixelRatio } from 'react-native'

const style = StyleSheet.create({
	header: {
		flex: 0.382,
		position: 'relative',
		borderBottomColor: '#333333',
		borderBottomWidth: 12 / PixelRatio.get()
	},
	background: {
		flex: 1
	},
	house: {
		position: 'absolute',
		bottom: -12 / PixelRatio.get(),
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height * 0.382
	}
})

export default style
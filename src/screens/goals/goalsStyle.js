import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
	title: {
		padding: width / 10,
		fontSize: width / 13,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})

export default style
import { StyleSheet, Dimensions } from 'react-native'
import colors from 'values/colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.35)'
	},
	content: {
		padding: width * 0.1
	},
	contentWrapper: {
		width: width * 0.8,
		maxHeight: height * 0.8,
		borderRadius: width * 0.05,
		backgroundColor: colors.white,
		overflow: 'hidden'
	},
	title: {
		fontSize: width / 20,
		fontWeight: 'bold'
	},
	bottomInputs: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	valueInput: {
		flex: 1
	},
	dateInput: {
		flex: 1,
		padding: width / 25,
		color: colors.grey
	},
	sliderWrapper: {
		paddingVertical: height / 40
	},
	sliderValue: {
		alignSelf: 'flex-end'
	},
	submit: {
		padding: height / 40,
		fontWeight: 'bold',
		color: colors.white,
		textAlign: 'center',
		backgroundColor: colors.green
	}
})

export default style
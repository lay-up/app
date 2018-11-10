import { StyleSheet, Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

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
		width: width,
		height: height * 0.382
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: height / 20
	},
	infoText: {
		fontSize: width / 16
	},
	infoBoldText: {
		fontWeight: 'bold'
	},
	infoValue: {
		fontSize: width / 7,
		lineHeight: width / 6,
		marginTop: height / -500
	},
	infoValueLabel: {
		marginTop: height / -60,
		alignSelf: 'flex-end'
	}
})

export default style
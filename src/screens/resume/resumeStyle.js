import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import colors from 'values/colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
	resume: {
		flex: 1,
		backgroundColor: colors.green
	},
	sky: { 
		flex: 0.618
	},
	house: {
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
		paddingTop: height / 5
	},
	infoText: {
		fontSize: width / 16,
		color: colors.white,
	},
	infoBoldText: {
		fontWeight: 'bold',
		color: colors.orange
	},
	infoValue: {
		fontSize: width / 5,
		lineHeight: width / 4.5,
		marginTop: height / -500,
	}
})

export default style